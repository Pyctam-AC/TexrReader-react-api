const express = require('express');

const app = express();
const cors = require('cors');

const {logData} = require('./middlewares/logData.js')
//const totalTime = require('./middlewares/totalOperatingTime.js')
const routes = require('./routes/index');


//console.log(totalTime(logData))

const port = 3000;

//console.log(logData)

//console.log(totalTime)

/* app.get('/', (req, res) => {
  res.send (totalTime)
}) */

app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
