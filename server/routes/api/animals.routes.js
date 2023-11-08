const router = require('express').Router();
const { Animal } = require('../../db/models');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
  try {
    const animals = await Animal.findAll({ raw: true, exclude: ['user_id', 'type_id'] });
    res.json(animals);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/:animalId', async (req, res) => {
  try {
    const animal = await Animal.findOne({ raw: true, where: { id: req.params.animalId } });
    res.json(animal);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', upload.any('img'), async (req, res) => {
  try {
    const { name } = req.body;
    const result = await Promise.all(
      req.files.map((el) => {
        const newFileUrl = `/img/${el.originalname}`;

        return Animal.create({
          name,
          image: newFileUrl,
          type_id: 1,
          user_id: 1,
        });
      })
    );
    console.log(animal);
    res.json(animal);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', upload.single('img'), async (req, res) => {
  try {
    const { title, description, adult } = req.body;
    const newFileUrl = `/img/${req.file.originalname}`;
    const game = await Game.create({
      title,
      description,
      img: newFileUrl,
      adult,
      player_id: req.session.user_id,
    });
    const html = res.renderComponent(GameItem, { game }, { htmlOnly: true });
    res.json({
      message: 'success',
      html,
    });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:animalId', async (req, res) => {
  try {
    const { animalId } = req.params;
    const result = await Animal.destroy({ where: { id: animalId } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:animalId', async (req, res) => {
  try {
    const { animalId } = req.params;
    const { name, image, type_id } = req.body;
    const animal = await Animal.update(
      {
        name,
        image,
        user_id: req.session.userId,
        type_id,
      },
      { where: { id: animalId, user_id: req.session.userId } }
    );
    res.json(animal);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
