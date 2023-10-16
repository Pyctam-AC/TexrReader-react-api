const {operTime} = require('./operatingTime.js')
const mashineTime = require('./mashinTime.js')

const timeWork = (arr) => {

  const totalDiffTime = mashineTime(arr)

  const result = `Общее время работы оборудования ${totalDiffTime.hours} часов ${totalDiffTime.minutes} минут ${totalDiffTime.seconds}.${totalDiffTime.milliseconds} секунд`

  return result
}

module.exports = timeWork(operTime)
