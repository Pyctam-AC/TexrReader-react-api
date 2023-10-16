const {operTime, letTime, intervaSumm, timeObjekt} = require('./operatingTime.js');

const maxDownTime = (arr) => {

  const newArr = arr.slice(1, -1)

  const time = newArr.map((item) => {return letTime(item)});

  const interval = intervaSumm(time)
    .reduce((a, c) => c > a ? c : a, 0);

  const maxTime = timeObjekt(interval)

  const result = `Максимальное время простоя оборудования ${maxTime.hours} ч. ${maxTime.minutes} мин. ${maxTime.seconds}.${maxTime.milliseconds} сек.`

  return result
}

module.exports = maxDownTime(operTime);
