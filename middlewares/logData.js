// получаем данные из текстового файла

const fs = require('fs');


// Move_20200206.txt
module.exports = fs.readFile('./utils/Move_20200206.txt', { encoding: 'utf8' }, (err, data)  => {
  if (err) {
    console.log(err);
    return;
  }

  const logArrai = data
    .toString('utf8')
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

  //console.log(/* 'data: ',  */ logData)

  return logArrai;
});
