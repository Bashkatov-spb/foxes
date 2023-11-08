const { User } = require('../models');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await User.bulkCreate([
      { name: 'Алексей-Морозей', email: 'aleksey@example.com', password: '12345Aleksey' },
      { name: 'Мария-Веселяшка', email: 'maria@example.com', password: 'Maria12345' },
      { name: 'Иван-Болтун', email: 'ivan@example.com', password: 'IvanPass123' },
      { name: 'Елена-Радуга', email: 'elena@example.com', password: 'Elena45678' },
      { name: 'Дмитрий-Хохотун', email: 'dmitriy@example.com', password: 'Dima12345' },
      { name: 'Ольга-Загадка', email: 'olga@example.com', password: 'OlgaSecret' },
      { name: 'Павел-Каштан', email: 'pavel@example.com', password: 'Pavel98765' },
      { name: 'Анна-Пижон', email: 'anna@example.com', password: 'AnnaPassword' },
      { name: 'Сергей-Шутник', email: 'sergey@example.com', password: 'Sergey54321' },
      { name: 'Наталья-Искорка', email: 'natalia@example.com', password: 'NataliaPass' },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
