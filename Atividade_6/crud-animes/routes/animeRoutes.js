const express = require('express');
const animeController = require('../controllers/animeController');

const router = express.Router();

router.get('/', animeController.getAllAnimes);
router.get('/:id', animeController.getAnimeById);
router.post('/', animeController.createAnime);
router.put('/:id', animeController.updateAnime);
router.delete('/:id', animeController.deleteAnime);

module.exports = router;
