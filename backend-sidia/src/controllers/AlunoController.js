const Aluno = require('../models/Aluno');

module.exports = {
    async store(req, res) {
        const { name, email, password} = req.body;

        console.log(name, email, password);
        const aluno = await Aluno.create({
            name,
            password,
            email,
        });


        return res.json(aluno);
    },

    async index(req, res){
        const alunos = await Aluno.findAll();

        return res.json(alunos);
    }
}
