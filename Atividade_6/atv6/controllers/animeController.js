const animeService = require('../services/animeService');

class AnimeController {
  getAllAnimes(req, res) {
    try {
      const animes = animeService.getAllAnimes();
      res.status(200).json(animes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getAnimeById(req, res) {
    try {
      const anime = animeService.getAnimeById(req.params.id);
      res.status(200).json(anime);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  createAnime(req, res) {
    try {
      const newAnime = animeService.createAnime(req.body);
      res.status(201).json(newAnime);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  updateAnime(req, res) {
    try {
      const updatedAnime = animeService.updateAnime(req.params.id, req.body);
      res.status(200).json(updatedAnime);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  deleteAnime(req, res) {
    try {
      animeService.deleteAnime(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new AnimeController();
