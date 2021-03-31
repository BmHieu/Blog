const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const { extname } = require('path');
const app = express()
const port = 3000

const route = require('./routes');
const db = require('./config/db');

//connect to DB
db.connect();


app.use(express.static(path.join(__dirname, 'public')))

//HTTp logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

route(app);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})