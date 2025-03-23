const express = require('express');
const app = express();
const routes = require('./routes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

module.exports = app;
