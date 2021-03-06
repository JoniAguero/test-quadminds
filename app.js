const debug = require('debug')('back-end')
const logger = require('morgan')
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const noteRoute = require('./routes/notes.route');

const errorHandler = require('./_helpers/error-handler')
const fatalErrorHandler = require('./_helpers/fatal-error-handler')

require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI)

const app = express();
app.use(logger('dev'))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('client/build'))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin, Access-Control-Allow-Request-Method");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

app.use('/api', [noteRoute]);

app.use((err, req, res, next) => {
    debug(`Error: ${err.message}`)
    if (err.message.match(/not found/)) {
        return res.status(404).send({
            error: err.message
        })
    }
    res.status(500).send({
        error: err.message
    })
})

app.use(errorHandler)
app.use(fatalErrorHandler)
process.on('uncaughtException', fatalErrorHandler)
process.on('unhandledRejection', fatalErrorHandler)

module.exports = app;