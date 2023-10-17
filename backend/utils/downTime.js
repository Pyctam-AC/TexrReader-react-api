const {operTime} = require('./operatingTime.js')
const mashineTime = require('./mashinTime.js')

const downTime = (arr) => {

  const newArr = arr?.slice(1, -1)

  const totalDiffTime = mashineTime(newArr)

  const result = `Общее время простоя оборудования ${totalDiffTime.hours} часов ${totalDiffTime.minutes} минут ${totalDiffTime.seconds}.${totalDiffTime.milliseconds} секунд`

  return result
}

module.exports = downTime(operTime)
