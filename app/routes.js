'use strict';

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('this is the home page');
  });
  app.get('/top', (req, res) => {
    res.send('this is the top page');
  });
  app.get('/results', (req, res) => {
    res.send('this is the results page');
  });
  app.get('/api/results', (req, res) => {
    res.json({ message: 'this is the API' });
  });
}
