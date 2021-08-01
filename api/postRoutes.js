const bodyParser = require('body-parser');
const express = require('express');

const controllers = require('../controllers');
const { authJwt } = require('../middlewares');

const route = express.Router();
route.use(bodyParser.json());

route.post('/', authJwt, controllers.createPost);
route.get('/', controllers.listAllPosts);
route.get('/search?', controllers.searchTerm);
route.get('/:id', controllers.findPostById);
route.put('/:id', authJwt, controllers.updatePostById);
route.delete('/:id', authJwt, controllers.deletePostById);

module.exports = route;
