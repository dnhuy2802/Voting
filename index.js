const express = require('express')
const { engine } = require('express-handlebars');
const routes = require('./routes/indexRoutes')
const app = express()
const path = require('path');
const port = 3000
const firebase = require('./config/firebase')

// Template Engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// Config views path
app.set('views', path.join(__dirname, 'resource', 'views'));
app.engine('.hbs', engine({
    extname: '.hbs',
}));
// satic file
app.use(express.static(path.join(__dirname, "assets")))


// route init
routes(app)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})