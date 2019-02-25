const express = require('express');
const routes  = express.Router();
const authController = require('./src/Controller/AuthController');

routes.get('/auth',authController.index);
routes.post('/auth',authController.add);
routes.put('/auth/:id',authController.update);
routes.delete('/auth/:id',authController.delete);

module.exports = routes;