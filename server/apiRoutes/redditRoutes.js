const express = require('express');
const router = express.Router();
const axios = require('axios');

const filterAndMap = (arr, filterFunc, mapFunc) => {
  const filteredAndMappedArr = arr.reduce((accum, currVal) => {
    if (filterFunc(currVal)) {
      accum.push(mapFunc(currVal));
      return accum;
    }
    return accum;
  }, []);
  return filteredAndMappedArr;
};

const filterJsonFromReddit = axiosData => {
  const allPosts = axiosData.data.children;
  const filterFunc = post => !post.data.domain.includes('reddit');
  const mapFunc = post => ({ title: post.data.title, url: post.data.url });
  const allPostsFiltered = filterAndMap(allPosts, filterFunc, mapFunc);
  return allPostsFiltered;
};

// get to /api/reddit/news
router.get('/news', (req, res, next) => {
  axios.get('https://www.reddit.com/r/news.json').then(response => {
    const filteredPosts = filterJsonFromReddit(response.data);
    res.status(200).send(filteredPosts);
  });
});

router.get('/worldnews', (req, res, next) => {
  axios.get('https://www.reddit.com/r/worldnews.json').then(response => {
    const filteredPosts = filterJsonFromReddit(response.data);
    res.status(200).send(filteredPosts);
  });
});

router.get('/sports', (req, res, next) => {
  axios.get('https://www.reddit.com/r/sports.json').then(response => {
    const filteredPosts = filterJsonFromReddit(response.data);
    res.status(200).send(filteredPosts);
  });
});

module.exports = router;
