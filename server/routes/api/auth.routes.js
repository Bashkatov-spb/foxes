const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/sign-up', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ where: { email } });
    if (!name || !email || !password) {
      res.json({ message: 'Заполните все поля' });
      return;
    }
    if (user) {
      res.json({ message: 'Такой емайл уже занят' });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hash });
    req.session.userId = user.id;
    res.json(user);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/sign-in', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.json({ message: 'Такого юзера не существует или пароль неверный' });
      return;
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      res.json({ message: 'Такого юзера не существует или пароль неверный' });
      return;
    }
    if (!email || !password) {
      res.json({ message: 'Заполните все поля' });
      return;
    }
    req.session.userId = user.id;
    res.json(user);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }

    res
      .clearCookie('user_sid') // серверное удаление куки по имени

      .json({ message: 'success' });
  });
});

router.get('/check', async (req, res) => {
  try {
    if (req.session.userId) {
      const user = await User.findOne({ where: { id: req.session.userId } });
      res.json({ message: 'success', user });
      return;
    }
    res.json({ message: 'false' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
