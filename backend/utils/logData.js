// получение данных из текстового файла

const fs = require('fs');

const pathToFile = './constans/Move_20200206.txt';

const dataTextLog = fs.readFileSync(pathToFile, { encoding: 'utf8' })

const logData = dataTextLog
    .split(/\r\n/).filter(element => element.length !== 0)
    .map(cell => cell.split(';').filter(element => element !== ''))
    .map((item) => {
      return newItem = {
        time: item[0],
        nameEvent: item[1],
        process_amount: item[2],
        process_speed: item[3],
        seconds_amount: item[4],
        stop_cod: item[5],
      }
    })

module.exports = {logData};
