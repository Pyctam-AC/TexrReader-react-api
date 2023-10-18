const {logData} = require ('./logData.js')
const {chartData} = require ('./operatingTime.js')

//вычисляем количесвто обработанных единиц нарастающим итогом в по времени

const cumulativeTotal = (arr) => {
  //console.log(arr)
  const arrA = arr?.map((item) => Number(item.process_amount));

  const arrB = arrA.map((item, i, arrA) => {
    let res = 0;
    for (j=0; j<=i; j++) {
      res += arrA[j]
    }
    return res
  })
//  console.log(arrB)

  const arrRes = arr.map((item, i) => {
    return {
      time: item.time,
      process_speed: item.process_speed,
      process_acc: arrB[i]
    }
  })

  return arrRes
}

module.exports = cumulativeTotal(chartData)


