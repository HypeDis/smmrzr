const chalk = require('chalk');
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

const redditRoutes = require('./apiRoutes/redditRoutes');
const summaryRoutes = require('./apiRoutes/summaryRoutes');

const { PORT } = process.env;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

const publicPath = path.join(__dirname, '/public');
app.use('/api/reddit', redditRoutes);
app.use('/api/summary', summaryRoutes);
app.use(express.static(publicPath));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, function(reloadReturned) {
  console.log(chalk.green(`listening on port ${PORT}`));
});
