const express = require('express');

const app = express();
const cors = require('cors');

const routes = require('./routes/index');

const port = 3000;

app.use(express.json());

app.use(cors({
  origin:
      `http://localhost:5173`,
}));

app.use(routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
