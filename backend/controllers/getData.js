const totalDiffTime = require('../utils/totalOperatingTime.js')
const timeWork = require ('../utils/timeWork.js')
const downTime = require ('../utils/downTime.js')
const totalProcessAmount = require ('../utils/totalProcessAmount.js')
const averageQuantity = require ('../utils/averageQuantity.js')
const maxOperatingTime = require ('../utils/maxOperatingTime.js')
const maxDownTime = require ('../utils/maxDownTime.js')

// т.к. все функции в одно действие оптимизация и рефкторинг не проводились
// в рамках тестового задания ошибки не обрабатывались

const getTotalTime = (req, res, next) => {
  res.status(200).send(`Общее время работы ${totalDiffTime.hours} часов ${totalDiffTime.minutes} минут ${totalDiffTime.seconds}.${totalDiffTime.milliseconds} секунд`);
  next()
}

const getTotalMashineTime = (req, res, next) => {
  res.status(200).send(timeWork);
  next()
}

const getTotalDownTime = (req, res, next) => {
  res.status(200).send(downTime);
  next()
}

const getTotalProcessAmount = (req, res, next) => {
  res.status(200).send(`Общее количество обработанных единиц продукции ${totalProcessAmount}`);
  next()
}

const getAverageQuantity = (req, res, next) => {
  res.status(200).send(`Средняя скорость обработки единиц в час ${averageQuantity}`);
  next()
}

const getMaxOperatingTime = (req, res, next) => {
  res.status(200).send(maxOperatingTime);
  next()
}

const getMaxDownTime = (req, res, next) => {
  res.status(200).send(maxDownTime);
  next()
}


module.exports = {
  getTotalTime,
  getTotalMashineTime,
  getTotalDownTime,
  getTotalProcessAmount,
  getAverageQuantity,
  getMaxOperatingTime,
  getMaxDownTime,
}
