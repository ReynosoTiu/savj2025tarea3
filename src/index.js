const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./src/models');
const authMiddleware = require('./src/middleware/auth.middleware');

app.use(express.json());

app.post('/login', require('./src/routes/login.route'));
app.use(authMiddleware);
app.use('/cis', require('./src/routes/ci.routes'));
app.use('/relaciones', require('./src/routes/relacion.routes'));
app.use('/cambios', require('./src/routes/cambio.routes'));

app.listen(PORT, async () => {
  await db.sequelize.sync();
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
