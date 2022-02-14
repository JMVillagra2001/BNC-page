if(localStorage.getItem('lang') === null || localStorage.getItem('lang') === undefined){
    localStorage.setItem('lang', 'es');
}

function changeLanguage(lang){
    localStorage.setItem('lang', lang);
    window.location = './home.html';
}
