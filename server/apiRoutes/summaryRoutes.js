const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', (req, res, next) => {
  console.log('getting data');
  axios
    .post('http://127.0.0.1:5000/createsummary', {
      url: req.body.url,
      percentage: req.body.percentage,
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
