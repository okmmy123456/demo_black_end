'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    data.map(item=>{
      item.created_at = new Date()
      item.updated_at = new Date()

    })

    await queryInterface.bulkInsert('PRS',data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PRS', null, {});

  }
};

const data = [
  {
    "Site": 0,
    "Section": 0,
    "prnonumber": 123456,
    "Description": " test 00",
    "Qty": 2,
    "Unit": 2,
    "Price": 200,
    "Amount": 400,
    "Supplier": "Hanon",
    "Assetno": 78956,
    "over1y": true,
    "comment": ""
  },
  {
    "Site": 0,
    "Section": 0,
    "prnonumber": 123456,
    "Description": " test 02",
    "Qty": 2,
    "Unit": 2,
    "Price": 200,
    "Amount": 400,
    "Supplier": "Hanon",
    "Assetno": 78956,
    "over1y": true,
    "comment": ""
  },
]