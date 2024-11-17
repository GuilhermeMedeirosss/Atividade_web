const express = require('express');
const { v4: uuidv4 } = require('uuid'); // Para gerar IDs únicos
const app = express();

app.use(express.json()); // Middleware para interpretar JSON

// Banco de dados em memória
let animes = [
  { id: uuidv4(), name: 'Naruto', genre: 'Ação', studio: 'Pierrot' }
];

// 1. Listar todos os animes
app.get('/animes', (req, res) => {
  res.status(200).json(animes);
});

// 2. Listar um anime por ID
app.get('/animes/:id', (req, res) => {
  const { id } = req.params;
  const anime = animes.find((anime) => anime.id === id);
  if (!anime) {
    return res.status(404).json({ message: 'Anime não encontrado!' });
  }
  res.status(200).json(anime);
});

// 3. Criar um novo anime
app.post('/animes', (req, res) => {
  const { name, genre, studio } = req.body;

  // Validações
  if (!name || !genre || !studio) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
  }

  const newAnime = { id: uuidv4(), name, genre, studio };
  animes.push(newAnime);
  res.status(201).json(newAnime);
});

// 4. Atualizar um anime por ID
app.put('/animes/:id', (req, res) => {
  const { id } = req.params;
  const { name, genre, studio } = req.body;

  const animeIndex = animes.findIndex((anime) => anime.id === id);
  if (animeIndex === -1) {
    return res.status(404).json({ message: 'Anime não encontrado!' });
  }

  // Validações
  if (!name || !genre || !studio) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
  }

  animes[animeIndex] = { id, name, genre, studio };
  res.status(200).json(animes[animeIndex]);
});

// 5. Deletar um anime por ID
app.delete('/animes/:id', (req, res) => {
  const { id } = req.params;
  const animeIndex = animes.findIndex((anime) => anime.id === id);
  if (animeIndex === -1) {
    return res.status(404).json({ message: 'Anime não encontrado!' });
  }

  animes.splice(animeIndex, 1);
  res.status(200).json({ message: 'Anime deletado com sucesso!' });
});

module.exports = app;
