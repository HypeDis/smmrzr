const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', (req, res, next) => {
  const percentageStr = req.body.percentage;
  let percentage = parseInt(percentageStr);

  // frontend is 'percent to shrink' back end is 'percent of original' so have to invert the value
  percentage = 100 - percentage;

  axios
    .post('http://127.0.0.1:5000/createsummary', {
      url: req.body.url,
      percentage,
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(e => {
      console.error('Error fetching summary from python');
      res.status(400).send({ error: 'Could not get summary from url' });
    });
});

module.exports = router;
