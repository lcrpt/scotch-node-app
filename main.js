'use strict';

require('dotenv').config();

const app = require('./app/server');

const hostname = 'localhost';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
