const Aluno = require('../models/Aluno');

module.exports = {
    async store(req, res) {
        const { name, email} = req.body;

        const aluno = await Aluno.create({
            name,
            email 
        });


        return res.json(aluno);
    },

    async index(req, res){
        const alunos = await Aluno.findAll();

        return res.json(alunos);
    }
}
