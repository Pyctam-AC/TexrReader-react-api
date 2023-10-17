// в этом файле набор общих функций необходимых для вычисления различных значений

const {logData} = require ('./logData.js')

//формируем массив из "START" и "STOP"
const operTime = logData.filter((item) => {
  if (item.nameEvent !== 'SNAPSHOT') {
      return item}
}).map((item) => {return item.time})

//формуруем объект времени
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

//вычисляем разницу во времени
const diffTime = (time1, time2) => {

  const diff = (time2.hour+time2.minute+time2.second+time2.millisecond) - (time1.hour+time1.minute+time1.second+time1.millisecond);

  return diff
}

//приводим время к объекту времени
const timeObjekt = (diff) => {
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

//результат полученный в милисекундах отправляем в функцию преобразрвания в объект времени
const totalTimeWork = (time) => {
  return timeObjekt(time)
}

//формируем массив числе разниц по времени между событиями
const intervaSumm = (arr)=> {
  const arrInterval = [];

  for (let i = 0; i < arr.length; i = i + 2) {
    arrInterval.push(diffTime(arr[i], arr[i + 1]));
  }

  return arrInterval;
}

//module.exports = operatingTime(logData)
module.exports = {operTime, letTime, diffTime, timeObjekt, totalTimeWork, intervaSumm};
