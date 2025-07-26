'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        id: 'f5fabeb3-6a2f-4479-b0b2-b7b050ad8a41',
        name: 'John Doe',
        email: 'john.doe@dummy.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'f5fabeb3-6a2f-4479-b0b2-b7b050ad8a42',
        name: 'Juan Perez',
        email: 'juan.perez@dummy.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
