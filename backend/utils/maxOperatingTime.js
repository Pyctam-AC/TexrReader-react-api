const {operTime, letTime, intervaSumm, timeObjekt} = require('./operatingTime.js');

const maxOperatingTime = (arr) => {
  const time = arr?.map((item) => {return letTime(item)});

  const interval = intervaSumm(time)
    .reduce((a, c) => c > a ? c : a, 0);

  const maxTime = timeObjekt(interval)

  const result = `Максимальное время работы оборудования ${maxTime.hours} ч. ${maxTime.minutes} мин. ${maxTime.seconds}.${maxTime.milliseconds} сек.`

  return result
}

module.exports = maxOperatingTime(operTime);
