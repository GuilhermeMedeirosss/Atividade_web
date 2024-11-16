const animes = []; // Array que simula o banco de dados

class AnimeRepository {
  findAll() {
    return animes;
  }

  findById(id) {
    return animes.find(anime => anime.id === id);
  }

  save(anime) {
    animes.push(anime);
    return anime;
  }

  update(id, updatedAnime) {
    const index = animes.findIndex(anime => anime.id === id);
    if (index !== -1) {
      animes[index] = { ...animes[index], ...updatedAnime };
      return animes[index];
    }
    return null;
  }

  delete(id) {
    const index = animes.findIndex(anime => anime.id === id);
    if (index !== -1) {
      return animes.splice(index, 1);
    }
    return null;
  }
}

module.exports = new AnimeRepository();
