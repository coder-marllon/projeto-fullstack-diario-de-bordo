const express = require('express');
const router = express.Router();
const { Entry } = require('../models/Entry');
const authMiddleware = require('../middleware/auth');

// Todas as rotas exigem autenticação
router.use(authMiddleware);

// Criar nova entrada
router.post('/', async (req, res) => {
  try {
    const entry = await Entry.create({
      ...req.body,
      userId: req.userId
    });
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar entrada' });
  }
});

// Listar entradas do usuário
router.get('/', async (req, res) => {
  try {
    const entries = await Entry.findAll({
      where: { userId: req.userId }
    });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar entradas' });
  }
});

module.exports = router;