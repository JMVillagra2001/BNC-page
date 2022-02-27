// Configuración inicial
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
var session = require('express-session')

// Motor de plantilla
const hbs = require('hbs');
//const User = require("./models/User");
const { createSha1 } = require("./helpers/sha1");

const { config } = require('dotenv');
config();

// Handlebars
hbs.registerPartials(__dirname + '/views/partials', function (err) { });
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

hbs.registerHelper('checked', function (currentValue) {
    return currentValue == '1' ? "checked" : '';
});


app.use(express.static(__dirname + "/public"));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

//Models
const User = require("./models/User");
const Development = require("./models/Development");
const House = require("./models/House");

// Sesiones
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'keyboard cat',
    cookie: {
        expires: 600000
    }
}))

// Error handler
app.use((err, req, res, next) => {
    console.log(`Error: ${JSON.stringify(err)}`);
    console.log(`Message: ${err.message}`);
    console.log(`Stack: ${err.stack}`);
    res.status(err.status || 500);
    next();
});

// Aquí detallar rutas

const verifySession = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/');
    }
}

// Iniciar servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// Rutas
app.get('/', (req, res) => {
    if (req.session.user) {
        res.redirect('/home');
    }
    res.render('login');
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const hashPassword = createSha1(password);

    const result = await User.findOne({
        where: {
            email,
            password: hashPassword
        }
    })

    if (result) {
        const user = {
            email: req.body.email,
            isAdmin: result.isAdmin,
            permissions: {
                canRead: result.canRead,
                canWrite: result.canWrite,
                canDelete: result.canDelete
            }
        }
        req.session.user = user;
        res.redirect('/home');
    } else {
        res.redirect('/');
    }
});

app.post('/logout', verifySession, (req, res) => {
    delete req.session.user;
    res.redirect('/');
});

app.get('/home', (req, res) => {
    res.render('index');
});

//Users 

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.render('users', { users });
});

app.get('/users/form', async (req, res) => {
    res.render('user-form');
});

app.get('/users/:id/form', async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    if (user) {
        res.render('user-form', { user });
    } else {
        res.redirect('/users');
    }
});

app.post('/users/create', async (req, res) => {
    const { email, firstname, lastname, password } = req.body;
    let { isAdmin, canRead, canWrite, canDelete } = req.body;

    canDelete = canDelete == 'on' ? 1 : 0;
    canWrite = canWrite == 'on' ? 1 : 0;
    canRead = canRead == 'on' ? 1 : 0;
    isAdmin = isAdmin == 'on' ? 1 : 0;

    if (req.body.id) {
        await User.update({
            email,
            firstname,
            lastname,
            isAdmin,
            canRead,
            canWrite,
            canDelete
        }, {
            where: {
                id: req.body.id
            }
        });
    } else {
        try {
            await User.create({
                email,
                firstname,
                lastname,
                password: createSha1(password),
                isAdmin: false,
                canRead,
                canWrite,
                canDelete
            });
        } catch (error) {
            console.log(error);
        }

    }
    res.redirect('/users');
});

app.post('/users/delete/:id', async (req, res) => {
    await User.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/users');
});


//Developments

app.get('/developments', async (req, res) => {
    const developments = await Development.findAll();
    res.render('developments', { developments });
});

app.get('/developments/form', async (req, res) => {
    res.render('development-form');
});

app.get('/developments/:id/form', async (req, res) => {
    const development = await Development.findOne({
        where: {
            id: req.params.id
        }
    });
    if (development) {
        res.render('development-form', { development });
    } else {
        res.redirect('/developments');
    }
});

app.post('/developments/create', async (req, res) => {
    const { id, name, ubication, state } = req.body;

    if (id) {
        await Development.update({
            name,
            ubication,
            state
        }, {
            where: {
                id
            }
        });
    } else {
        try {
            await Development.create({
                name,
                ubication,
                state
            });
        } catch (error) {
            console.log(error);
        }

    }
    res.redirect('/developments');
});

app.post('/developments/delete/:id', async (req, res) => {
    await Development.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/developments');
});

app.get('/developments/:id/list', async (req, res) => {
    const developmentId = req.params.id;
    const houses = await House.findAll({
        where: {
            developmentId
        }
    });
    res.render('houses', { houses, developmentId });
});

//Houses

app.get('/:developmentId/houses/form', async (req, res) => {
    const { developmentId } = req.params;
    const { id } = req.query;
    if (id) {
        const house = await House.findOne({
            where: {
                id
            }
        });
        res.render('house-form', { house });
    } else if (developmentId) {
        const house = {
            developmentId
        }
        res.render('house-form', { house });
    } else {
        res.redirect('/developments');
    }
});

app.post('/house/create', async (req, res) => {
    const { id, name, ubication, neighborhood, mts, rooms, baths, developmentId } = req.body;

    if (id) {
        await House.update({
            name,
            ubication,
            neighborhood,
            mts,
            rooms,
            baths
        }, {
            where: {
                id
            }
        });
    } else {
        try {
            await House.create({
                name,
                ubication,
                neighborhood,
                mts,
                rooms,
                baths,
                developmentId
            });
        } catch (error) {
            console.log(error);
        }

    }
    res.redirect(`/developments/${developmentId}/list`);
});

app.post('/houses/delete/:id', async (req, res) => {
    await House.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/developments');
});


// API Front

app.get('/api/developments', async (req, res) => {
    const develompents = await Development.findAll();
    res.status(200).json(develompents);
});

app.get('/api/developments/:id/houses', async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            message: "No se ha enviado el id del desarrollo"
        });
    }

    const houses = await House.findAll({
        where: {
            developmentId: id
        }
    });
    return res.status(200).json(houses);
});