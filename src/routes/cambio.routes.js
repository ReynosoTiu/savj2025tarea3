const express = require('express');
const router = express.Router();
const { Cambio } = require('../models');

router.post('/', async (req, res) => res.json(await Cambio.create(req.body)));
router.get('/', async (req, res) => res.json(await Cambio.findAll()));

module.exports = router;