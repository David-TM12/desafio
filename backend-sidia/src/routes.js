const express = require('express');
const AlunoController = require('./controllers/AlunoController');
const ProfessorController = require('./controllers/ProfessorController');
const AgendaController = require('./controllers/AgendaController');

const routes = express.Router();

routes.post('/alunos', AlunoController.store);
routes.get('/', AlunoController.index);
routes.post('/alunos/login', AlunoController.getAlunoByEmail);

routes.get('/', ProfessorController.index);
routes.post('/professores', ProfessorController.store);

routes.post('/agenda', AgendaController.store);
routes.get('/agenda/:aluno_id/aluno', AgendaController.index);

module.exports = routes;

