const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            //password: DataTypes.STRING,
        },{
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Professor, {foreignKey: 'agenda_id', through:'agendas', as: 'agenda'});
    }
}

module.exports = Aluno;