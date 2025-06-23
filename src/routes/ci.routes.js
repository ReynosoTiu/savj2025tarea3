const express = require('express');
const router = express.Router();
const { CI } = require('../models');

router.get('/', async (req, res) => res.json(await CI.findAll()));
router.get('/:id', async (req, res) => res.json(await CI.findByPk(req.params.id)));
router.post('/', async (req, res) => res.json(await CI.create(req.body)));
router.put('/:id', async (req, res) => {
  await CI.update(req.body, { where: { id: req.params.id } });
  res.json({ mensaje: 'Actualizado' });
});
router.delete('/:id', async (req, res) => {
  await CI.destroy({ where: { id: req.params.id } });
  res.json({ mensaje: 'Eliminado' });
});

module.exports = router;
