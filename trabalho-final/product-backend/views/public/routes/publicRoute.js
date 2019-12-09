const passport = require('passport');

const publicRoutes = (router, app) => {
    console.log('============== PUBLIC ROUTES');
    router.get(['/', '/index'], (req, res) => {
        app.set('layout', '../views/public/layout');
        res.render('public/pages/index');
    });

    router.get('/model', (req, res) => {
        app.set('layout', '../views/public/layout');
        res.render('public/pages/model');
    });

    router.get('/modelView', (req, res) => {
        app.set('layout', '../views/public/layout');
        res.render('public/pages/modelView');
    });

    router.get('/login', (req, res) => {
        app.set('layout', '../views/public/layout');
        res.render('public/pages/login');
    });

    router.get('/readHtml', (req, res) => {
        app.set('layout', '../views/public/layout');
        res.render('public/pages/readHtml');
    });



};

module.exports = publicRoutes;