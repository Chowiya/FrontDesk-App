const express = require('express');
const authRouter = require('./routes/authRouters');

const app = express();

app.use('/',authRouter)

module.exports = app;







