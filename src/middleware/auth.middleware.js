const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ mensaje: 'Token requerido' });
  try {
    const data = jwt.verify(token.split(' ')[1], 'secreto');
    req.user = data;
    next();
  } catch {
    res.status(403).json({ mensaje: 'Token inválido' });
  }
};