const totalTime = require('../middlewares/totalOperatingTime.js')

const getTotalTime = (req, res, next) => {
  res.status(200).send(totalTime);
  next()
}


module.exports = {
  getTotalTime,
}
