const express = require('express');
const cors = require('cors');
const configureDB = require('./config/database');
const router = require('./config/routes');
const PORT = 3097;

const app = express();
app.use(express.json());
app.use(cors());

configureDB();

app.use('/', router);

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
