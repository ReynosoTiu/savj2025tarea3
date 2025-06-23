const db = require('./src/models');
(async () => {
  await db.sequelize.sync({ force: true });
  await db.CI.bulkCreate([
    {
      nombre: 'Servidor1', tipo: 'Hardware', estado_actual: 'Activo', ambiente: 'PROD'
    },
    {
      nombre: 'App1', tipo: 'Aplicación', estado_actual: 'Activo', ambiente: 'QA'
    }
  ]);
  console.log('Datos cargados.');
})();
