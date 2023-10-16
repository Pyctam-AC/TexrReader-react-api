const express = require('express');

const app = express();
const cors = require('cors');

const routes = require('./routes/index');

const {logData} = require('./utils/logData.js')
const {operTime} = require ('./utils/operatingTime.js');
const timeWork = require ('./utils/timeWork.js')
const downTime = require ('./utils/downTime.js')
const totalProcessAmmount = require ('./utils/totalProcessAmount.js');
const averageQuantity = require ('./utils/averageQuantity.js')
const maxOperatingTime = require ('./utils/maxOperatingTime.js')
const maxDownTime = require ('./utils/maxDownTime.js')

const port = 3000;

app.use(express.json());

app.use(cors({
  origin:
      `http://localhost:5173`,
}));

//console.log(logData)
//console.log(operTime)
//console.log(downTime)
//console.log(timeWork)
//console.log(totalProcessAmmount)
//console.log(averageQuantity)
//console.log(maxOperatingTime)
//console.log(maxDownTime)

app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
