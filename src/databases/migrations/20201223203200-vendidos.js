'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('vendidos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      produto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      parc:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cliente_id:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "clientes",
          key:"id"
        },
        onDelete:'CASCADE',
        onUpdate: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('vendidos');

  }
};
