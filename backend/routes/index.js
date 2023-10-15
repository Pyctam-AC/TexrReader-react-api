const router = require('express').Router();

const {
  getTotalTime,
} = require ('../controllers/getData.js')

router.get('/', getTotalTime);

module.exports = router;
