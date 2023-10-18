const express = require('express');

const app = express();
const cors = require('cors');

const {logData} = require ('./utils/logData.js')

const cumulativeTotal = require ('./utils/cumulativeTotal.js')
//const {chartData} = require('./utils/operatingTime.js')

const routes = require('./routes/index');

const port = 3000;

app.use(express.json());

app.use(cors({
  origin:
      `http://localhost:5173`,
}));

app.use(routes);

//console.log(logData)
console.log(cumulativeTotal)

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
