const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o banco de dados
const db = require('./config/db');
db.sync()
  .then(() => console.log('Banco conectado!'))
  .catch(err => console.log('Erro na conexão:', err));

// Rotas
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/entries', require('./routes/entryRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));