const express = require('express');

const router = express.Router();

/* GET userps listing. */
router.get('/', (req, res, next) => {
  res.send('!!Welcome Babel-Nodemon 🗼👺');
});

module.exports = router;
