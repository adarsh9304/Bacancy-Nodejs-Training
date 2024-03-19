module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        userName: 'admin1',
        userEmail: 'admin1@example.com',
        password: 'adminpassword1',
        role: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'admin2',
        userEmail: 'admin2@example.com',
        password: 'adminpassword2',
        role: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
