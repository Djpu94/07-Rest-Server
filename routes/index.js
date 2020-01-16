const express = require('express');

const app =  express();

app.use(require('./usuario'));
app.use(require('./login'));
app.use(require('./catergoria'));
app.use(require('./producto'));

module.exports = app;