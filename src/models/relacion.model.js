module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Relacion', {
    tipo_relacion: DataTypes.STRING
  });
};