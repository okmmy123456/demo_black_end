'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PRS', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      site: {
        type: Sequelize.STRING
      },
      section: {
        type: Sequelize.STRING
      },
      prnonumber: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.INTEGER
      },
      unit: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      requieddate: {
        type: Sequelize.DATE
      },
      supplier: {
        type: Sequelize.STRING
      },
      assetno: {
        type: Sequelize.INTEGER
      },
      over1y: {
        type: Sequelize.BOOLEAN
      },
      comment: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PRS');
  }
};