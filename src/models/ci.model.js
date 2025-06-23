module.exports = (sequelize, DataTypes) => {
  return sequelize.define('CI', {
    nombre: DataTypes.STRING,
    tipo: DataTypes.ENUM('Hardware', 'Software', 'Base de Datos', 'Red', 'Aplicación'),
    descripcion: DataTypes.TEXT,
    numero_serie: DataTypes.STRING,
    version: DataTypes.STRING,
    fecha_adquisicion: DataTypes.DATE,
    estado_actual: DataTypes.STRING,
    ubicacion_fisica: DataTypes.STRING,
    propietario: DataTypes.STRING,
    nivel_seguridad: DataTypes.STRING,
    cumplimiento: DataTypes.STRING,
    estado_configuracion: DataTypes.STRING,
    numero_licencia: DataTypes.STRING,
    fecha_vencimiento: DataTypes.DATE,
    ambiente: DataTypes.ENUM('DEV', 'QA', 'PROD')
  });
};