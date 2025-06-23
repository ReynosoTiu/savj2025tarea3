const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('cmdb', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.CI = require('./ci.model')(sequelize, Sequelize);
db.Relacion = require('./relacion.model')(sequelize, Sequelize);
db.Cambio = require('./cambio.model')(sequelize, Sequelize);


db.CI.hasMany(db.Relacion, { foreignKey: 'ci_padre_id', as: 'hijos' });
db.CI.hasMany(db.Relacion, { foreignKey: 'ci_hijo_id', as: 'padres' });
db.Relacion.belongsTo(db.CI, { foreignKey: 'ci_padre_id', as: 'padre' });
db.Relacion.belongsTo(db.CI, { foreignKey: 'ci_hijo_id', as: 'hijo' });

db.CI.hasMany(db.Cambio, { foreignKey: 'ci_id' });
db.Cambio.belongsTo(db.CI, { foreignKey: 'ci_id' });

module.exports = db;