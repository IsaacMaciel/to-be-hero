const express = require("express");
const routes = express.Router();
const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentsCrontroller');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');




routes.post('/sessions',sessionController.create);

routes.get('/profile', profileController.index);



//* Rotas para Incidents  */

routes.get('/incidents', incidentsController.index);


routes.post('/incidents', incidentsController.create);

routes.delete('/incidents/:id',incidentsController.delete);


//* Rotas para Ongs **/
routes.get('/ongs', ongController.index);



routes.post('/ongs', ongController.create);





module.exports = routes;