class SitesController {
    //[GET] /
    index(req, res, next) {
        res.render('home.hbs')
    }
}

module.exports = new SitesController;
