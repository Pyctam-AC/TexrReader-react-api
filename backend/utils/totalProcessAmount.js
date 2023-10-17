const {logData} = require ('./logData')

const totalProcessAmount = (arr) => {
  const arrAmoutnProcess = arr?.map((item) => Number(item.process_amount))

  const summAmoutnProcess = arrAmoutnProcess.reduce((a, c) => a + c, 0 );

  return summAmoutnProcess
}

module.exports = totalProcessAmount(logData);
