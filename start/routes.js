// require your routes here
const users = require('../routes/users');
const docs = require('../routes/docs');
const songs = require('../routes/songs');
const albums = require('../routes/albums');
const artists = require('../routes/artists');
const { BASE_PATH } = require('../config/env');

/**
 * Routes list
 */
module.exports = (app) => {
// routes goes here
  app.use(`${BASE_PATH}/users`, users);
  app.use(`${BASE_PATH}/songs`, songs);
  app.use(`${BASE_PATH}/albums`, albums);
  app.use(`${BASE_PATH}/artists`, artists);
  // app.use(`${BASE_PATH}/songs`, songs);
  // app.use(`${BASE_PATH}/artists/:artistId/songs`, songs);

  app.use(`${BASE_PATH}/docs`, docs);
  app.use('*', docs);
};
