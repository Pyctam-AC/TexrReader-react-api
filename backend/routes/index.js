const router = require('express').Router();

const {
  getTotalTime,
  getTotalMashineTime,
  getTotalDownTime,
  getTotalProcessAmount,
  getAverageQuantity,
  getMaxOperatingTime,
  getMaxDownTime,
  getCumulativeTotal,
} = require ('../controllers/getData.js')

router.get('/totaltime', getTotalTime);
router.get('/mashinework', getTotalMashineTime);
router.get('/mashindowntime', getTotalDownTime);
router.get('/processamount', getTotalProcessAmount);
router.get('/averagequantity', getAverageQuantity);
router.get('/getmaxoperatingtime', getMaxOperatingTime);
router.get('/getmaxdowntime', getMaxDownTime);
router.get('/getcumulativetotal', getCumulativeTotal);

module.exports = router;
