const sitesRouter = require("../routes/sitesRoutes")

function route(app) {
    app.use('/', sitesRouter)
}

module.exports = route