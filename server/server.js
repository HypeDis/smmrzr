require('dotenv').config();

const chalk = require('chalk');
const express = require('express');
const morgan = require('morgan');
const app = express();

const redditRoutes = require('./apiRoutes/redditRoutes');

const { PORT } = process.env;
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/reddit', redditRoutes);

app.listen(PORT, () => {
  chalk.green(console.log(`listening on port ${PORT}`));
});
