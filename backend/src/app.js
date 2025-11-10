const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const apiRoutes = require('./routes/api');
app.use('/', apiRoutes);

module.exports = app;
