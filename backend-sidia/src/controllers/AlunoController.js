const Aluno = require('../models/Aluno');

module.exports = {
    async store(req, res) {
        try {
            const { name, email, senha } = req.body;

            const emailExists = await Aluno.findOne({
                where: { email}
            });

            if(emailExists) {
                return res.json({error: true, message: 'Já existe um usuário com esse email!!!'});
            }

            await Aluno.create({
                name,
                password: senha,
                email,
            });

            return res.status(201).send({status: 201, message: 'cadastrado com sucesso!!!'});
        } catch (error) {
            return res.status(500).json({error: true, message: error.message});
        }
    },

    async index(req, res) {
        const alunos = await Aluno.findAll();

        return res.json(alunos);
    },

    async getAlunoByEmail(req, res) {
        try {
            const { email, senha } = req.body;

            const aluno = await Aluno.findOne({
                where: {
                    email: email,
                    password: senha
                }
            });

            if (!aluno) {
                return res.status(404).json({ message: 'Aluno não encontrado' });
            }

            const alunoDto = {
                id: aluno.id,
                name: aluno.name,
                email: aluno.email,
            }

            return res.status(200).json(alunoDto);

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}
