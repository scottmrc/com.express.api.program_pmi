const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const indexRouter = require('./routes/index');

const app = express();

console.log('Express server starting');
console.log(`ENVIRONMENT: ${process.env.PRODUCTION}`);
console.log(`DOCKER: ${process.env.DOCKER}`);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.get('/test', (req, res) => {
    res.status(200).json({ alive: true, date: new Date() });
})

app.use('/redcap/citation/api', indexRouter);

module.exports = app;
