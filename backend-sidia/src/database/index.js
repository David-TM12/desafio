const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const Aluno = require('../models/Aluno');
const Professor = require('../models/Professor');
const Agenda = require('../models/Agenda');

const connection = new Sequelize(dbConfig);

Aluno.init(connection);
Professor.init(connection);
Agenda.init(connection);

Professor.associate(connection.models);
Aluno.associate(connection.models);
Agenda.associate(connection.models);



module.exports = connection;