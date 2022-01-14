// Configuración inicial
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
var session = require('express-session')

// Motor de plantilla
const hbs = require('hbs');
const User = require("./model/User");
hbs.registerPartials(__dirname + '/views/partials', function (err) { });
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

// Sesiones
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'keyboard cat',
    cookie: {
        expires: 600000
    }
}))

// Aquí detallar rutas

const verifySession = (req, res, next) =>{
    if(req.session.user){
        next()
    }else{
        res.redirect('/');
    }
}

// Iniciar servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


// Rutas
app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = new User()
    const result = await user.login(email, password);
    if(result){
        req.session.email = req.body.email;
        res.redirect('/home');
    }else{
        res.redirect('/');
    }
});

app.post('/logout', verifySession, (req, res) => {
    delete req.session.user;
    res.redirect('/');
});

app.get('/home', verifySession, (req, res) => {
    res.render('index');
});