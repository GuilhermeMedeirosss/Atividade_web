const { v4: uuidv4 } = require('uuid');
const Anime = require('../models/animeModel');
const animeRepository = require('../repositories/animeRepository');

class AnimeService {
  getAllAnimes() {
    return animeRepository.findAll();
  }

  getAnimeById(id) {
    const anime = animeRepository.findById(id);
    if (!anime) throw new Error('Anime not found');
    return anime;
  }

  createAnime(data) {
    const { name, genre, studio } = data;

    // Validação
    if (!name || !genre || !studio) {
      throw new Error('All fields are required');
    }

    const newAnime = new Anime(uuidv4(), name, genre, studio);
    return animeRepository.save(newAnime);
  }

  updateAnime(id, data) {
    const anime = animeRepository.update(id, data);
    if (!anime) throw new Error('Anime not found');
    return anime;
  }

  deleteAnime(id) {
    const deletedAnime = animeRepository.delete(id);
    if (!deletedAnime) throw new Error('Anime not found');
    return deletedAnime;
  }
}

module.exports = new AnimeService();
