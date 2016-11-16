'use strict';

const core = require('./controllers/core');

module.exports = (app) => {
  app.get('/', core.home);

  app.get('/top', core.top);

  app.get('/results', (req, res) => {
    res.send('this is the results page');
  });

  app.get('/api/results', (req, res) => {
    res.json({ message: 'this is the API' });
  });
}
