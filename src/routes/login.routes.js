const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

const user = { username: 'admin', password: bcrypt.hashSync('admin123', 8) };

router.post('/', (req, res) => {
  const { username, password } = req.body;
  if (username !== user.username || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ mensaje: 'Credenciales inválidas' });
  }
  const token = jwt.sign({ username }, 'secreto', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;