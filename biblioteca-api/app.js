//arquivo principal
const express = require('express');
const livroRoutes = require('./routes/livroRoutes.js');
require('dotenv').config();
require('./config/database.js'); // Conectando ao banco de dados

const app = express();

const cors = require('cors');

// Middlewares
app.use(express.json());
app.use(cors());

// Rotas
app.use('/livros', livroRoutes);

// Exportando a aplicação configurada
module.exports = app;
