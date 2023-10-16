const {logData} = require ('./logData.js')
const {letTime, diffTime, totalTimeWork} = require ('./operatingTime.js')

//общее время работы оборудования

/* const totalTimeWork = (time) => {
  return timeObjekt(time)
} */

const totalTime = (arrayData) => {
  const startTime = arrayData.find( item => { return item.nameEvent === 'START' }).time;

  const lastTime = (array) => {
    let lastIndex = null;
    array.forEach((item, i) => {
      if (item.nameEvent === "STOP") {
        lastIndex = i;
      }
    });
    return array[lastIndex].time;
  }

  const firstStartTime = letTime(startTime);

  const lastStopTime = letTime(lastTime(arrayData));

  const tiemOwn = diffTime (firstStartTime, lastStopTime);

  const totalDiffTime = totalTimeWork (tiemOwn);

  return totalDiffTime

};

module.exports = totalTime(logData);
