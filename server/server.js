const db = require('./db/db');
const chalk = require('chalk');
const express = require('express');
const morgan = require('morgan');
const app = express();

const redditRoutes = require('./apiRoutes/redditRoutes');
const summaryRoutes = require('./apiRoutes/summaryRoutes');

const { PORT } = process.env;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/reddit', redditRoutes);
app.use('/api/summary', summaryRoutes);

db.sync()
  .then(() => {
    chalk.green(console.log('db synced'));

    app.listen(PORT, () => {
      chalk.green(console.log(`listening on port ${PORT}`));
    });
  })
  .catch(e => chalk.red(console.error(e)));
