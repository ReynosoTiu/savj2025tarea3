const request = require('supertest');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const db = require('../src/models');
const ciRoutes = require('../src/routes/ci.routes');
const auth = require('../src/middleware/auth.middleware');

app.use(express.json());
app.use(auth);
app.use('/cis', ciRoutes);

const token = jwt.sign({ username: 'test' }, 'secreto');

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
});

test('Crear un CI', async () => {
  const res = await request(app)
    .post('/cis')
    .set('Authorization', `Bearer ${token}`)
    .send({ nombre: 'TestCI', tipo: 'Hardware', estado_actual: 'Activo', ambiente: 'DEV' });
  expect(res.statusCode).toBe(200);
  expect(res.body.nombre).toBe('TestCI');
});
