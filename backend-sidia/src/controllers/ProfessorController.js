const Professor = require('../models/Professor');
module.exports = {
    async store(req, res) {
        const { name, email, materia } = req.body;

        const professor = await Professor.create({
            name,
            email,
            materia
        });
        
        return res.json(professor);
    },

    async index(req, res){
        const professores = await Professor.findAll();

        return res.json(professores);
    }
};