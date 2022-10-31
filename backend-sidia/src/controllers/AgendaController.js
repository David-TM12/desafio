const Agenda = require('../models/Agenda');
const Professor = require('../models/Professor');
const Aluno = require('../models/Aluno');
const Sequelize = require('sequelize');
const QueryTypes = require('sequelize');
const dbConfig = require('../config/database');


module.exports = {
    async store(req, res) {
        const { id_aluno, id_professor, dia_hora } = req.body;
        console.log(id_aluno, ' - ', id_professor, ' - ', dia_hora);
        const alunoExists = Aluno.findByPk(id_aluno);
        const professorExists = Professor.findByPk(id_professor);

        if (!alunoExists) {
            return res.status(404).json({ Message: 'Aluno not already exists' });
        }

        if (!professorExists) {
            return res.status(404).json({ Message: 'Professor not already exists' });
        }

        const agenda = await Agenda.create({
            aluno_id: id_aluno,
            professor_id: id_professor,
            dia_hora
        });

        return res.json(agenda);
    },

    async index(req, res) {
        try {
            const { aluno_id } = req.params;

            const alunoExists = await Aluno.findByPk(aluno_id);

            if (!alunoExists) {
                throw Error();
            }

            var sequelize = new Sequelize(dbConfig);
            const [results, matadata] = await sequelize.query(
                'select a.id as matricula_aluno, a.name as nome_aluno, p.id as matricula_professor, p.name as professor, p.materia as materia, b.dia_hora as data from alunos a inner join agendas b on a.id = b.aluno_id inner join professors p  on b.professor_id  = p.id where a.id = $1',
                {
                    bind: [aluno_id],
                    type: QueryTypes.SELECT
                })

            return res.json(results);
            
        } catch (error) {
            return res.status(404).json({ Message: 'Aluno not already exists' });
        }
    }
};