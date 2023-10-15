const {logData} = require ('./logData.js')

//вычисляем разницу во времени
const diffTime = (time1, time2) => {

  const diff = (time2.hour+time2.minute+time2.second+time2.millisecond) - (time1.hour+time1.minute+time1.second+time1.millisecond);

  const res  = {
    hours: null,
    minutes: null,
    seconds: null,
    milliseconds: null,
    }

    let time  = diff;

    res.hours =  Math.floor(time / 3600000)

    time = time % 3600000
    res.minutes = Math.floor(time / 60000)

    time = time % 60000
    res.seconds = Math.floor(time / 1000)

    res.milliseconds = time % 1000

  return res
}

const letTime = (arr) => {

  const arrTime = arr.split(':').flatMap(item => item.split('-'))

  const newTime = {
    hour: arrTime[0]*3600*1000,
    minute: arrTime[1]*60*1000,
    second: arrTime[2]*1000,
    millisecond: arrTime[3]*1
  }
  return newTime
}

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

  const totalDiffTime = diffTime (firstStartTime, lastStopTime);

  const result = `Общее время работы ${totalDiffTime.hours} часов ${totalDiffTime.minutes} минут ${totalDiffTime.seconds}.${totalDiffTime.milliseconds} секунд`

  return result

};

module.exports = totalTime(logData);
