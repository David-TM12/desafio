'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'alunos',
      "agenda_id", {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'agendas', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    )
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.removeColumn(
      'alunos',
      'agenda_id',
    );

  }
};
