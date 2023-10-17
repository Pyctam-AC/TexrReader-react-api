// формируем общее время из заданного массива

const {letTime, timeObjekt, intervaSumm} = require('./operatingTime.js')

const mashinTime = (arr) => {
  const time = arr?.map((item) => {return letTime(item)});

  const interval = intervaSumm(time);

  const totalDiffTime = timeObjekt(interval.reduce((a, c) => a + c, 0));

  return totalDiffTime;
}


module.exports = mashinTime;
