'use strict';
module.exports = function(app) {
  var usersCtrl = require('./controllers/UsersController');

  // todoList Routes
  app.route('/users')
    .get(usersCtrl.get)
    .post(usersCtrl.store);


  app.route('/users/:userId')
    .get(usersCtrl.detail)
    .put(usersCtrl.update)
    .delete(usersCtrl.delete);

  var placesCtrl = require('./controllers/PlacesController')

  app.route('/places')
    .get(placesCtrl.get)
    .post(placesCtrl.store);


  app.route('/places/:placeId')
    .get(placesCtrl.detail)
    .put(placesCtrl.update)
    .delete(placesCtrl.delete);
};
