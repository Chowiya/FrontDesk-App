const express = require('express');
const authRouter = require('./routes/authRouters');

const app = express();

app.use('/auth',authRouter)

module.exports = app;







