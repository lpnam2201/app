'use strict';
module.exports = function(app) {
  // userList Routes
  var usersCtrl = require('./controllers/UsersController');
  
  app.route('/users')
    .get(usersCtrl.get)
    .post(usersCtrl.store);


  app.route('/users/:userId')
    .get(usersCtrl.detail)
    .put(usersCtrl.update)
    .delete(usersCtrl.delete);

  // placeList Routes
  var placesCtrl = require('./controllers/PlacesController')

  app.route('/places')
    .get(placesCtrl.get)
    .post(placesCtrl.store);


  app.route('/places/:placeId')
    .get(placesCtrl.detail)
    .put(placesCtrl.update)
    .delete(placesCtrl.delete);

  // experienceList Routes
  var experiencesCtrl = require('./controllers/ExperiencesController')

  app.route('/experience')
    .get(experiencesCtrl.get)
    .post(experiencesCtrl.store);
  
  
  app.route('/experience/:experienceId')
    .get(experiencesCtrl.detail)
    .put(experiencesCtrl.update)
    .delete(experiencesCtrl.delete);

  // profileList Routes
  var profilesCtrl = require('./controllers/ProfilesController')

  app.route('/profile')
    .get(profilesCtrl.get)
    .post(profilesCtrl.store);
  
  
  app.route('/profile/:profileId')
    .get(profilesCtrl.detail)
    .put(profilesCtrl.update)
    .delete(profilesCtrl.delete);

  // postList Routes
  var postsCtrl = require('./controllers/PostsController')

  app.route('/post')
    .get(postsCtrl.get)
    .post(postsCtrl.store);
  
  
  app.route('/post/:postId')
    .get(postsCtrl.detail)
    .put(postsCtrl.update)
    .delete(postsCtrl.delete);

};
