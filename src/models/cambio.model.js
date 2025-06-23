module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Cambio', {
    fecha_cambio: DataTypes.DATE,
    descripcion: DataTypes.TEXT
  });
};