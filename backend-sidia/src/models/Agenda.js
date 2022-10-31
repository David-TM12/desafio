const { Model, DataTypes } = require('sequelize');

class Agenda extends Model {
    static init(sequelize) {
        super.init({
            aluno_id: DataTypes.STRING,
            professor_id: DataTypes.STRING,
            dia_hora: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsToMany(models.Aluno, {foreignKey: 'aluno_id', through: 'agendas', as: 'aluno'});
        this.belongsToMany(models.Professor, {foreignKey: 'professor_id', through: 'agendas', as: 'professor'});
    }
}

module.exports = Agenda;