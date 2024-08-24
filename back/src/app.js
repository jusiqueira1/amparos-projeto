
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();

const router = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const profissionalRouter = require('./routes/profissionalRouter');

app.use(express.json());
app.use(cors())
app.set('port', process.env.PORT || 3005);

app.use('/api', router);
app.use('/api', loginRouter);
app.use('/api', profissionalRouter);

module.exports = app;