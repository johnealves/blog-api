module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('BlogPosts',
      [
        {
          id: 1,
          title: 'Post do Ano',
          subtitle: 'Melhor post do ano',
          content: 'Melhor post do ano',
          userId: 1,
          createdAt: new Date('2011-08-01T19:58:00.000Z'),
          updatedAt: new Date('2011-08-01T19:58:51.000Z'),
        },
        {
          id: 2,
          title: 'Vamos que vamos',
          subtitle: 'Foguete não tem ré',
          content: 'Foguete não tem ré',
          userId: 1,
          createdAt: new Date('2011-08-01T19:58:00.000Z'),
          updatedAt: new Date('2011-08-01T19:58:51.000Z'),
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('BlogPosts', null, {});
  },
};
