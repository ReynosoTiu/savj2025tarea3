const express = require('express');
const router = express.Router();
const { Relacion } = require('../models');

router.post('/', async (req, res) => res.json(await Relacion.create(req.body)));
router.get('/', async (req, res) => res.json(await Relacion.findAll()));

module.exports = router;