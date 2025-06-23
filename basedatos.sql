CREATE DATABASE tarea3;
USE tarea3;

CREATE TABLE CI (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    tipo ENUM('Hardware', 'Software', 'Base de Datos', 'Red', 'Aplicación') NOT NULL,
    descripcion TEXT,
    numero_serie VARCHAR(100),
    version VARCHAR(50),
    fecha_adquisicion DATE,
    estado_actual VARCHAR(100),
    ubicacion_fisica VARCHAR(255),
    propietario VARCHAR(255),
    nivel_seguridad VARCHAR(50),
    cumplimiento VARCHAR(50),
    estado_configuracion VARCHAR(50),
    numero_licencia VARCHAR(100),
    fecha_vencimiento DATE,
    ambiente ENUM('DEV', 'QA', 'PROD')
);

CREATE TABLE Relacion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ci_padre_id INT NOT NULL,
    ci_hijo_id INT NOT NULL,
    tipo_relacion VARCHAR(100),
    FOREIGN KEY (ci_padre_id) REFERENCES CI(id) ON DELETE CASCADE,
    FOREIGN KEY (ci_hijo_id) REFERENCES CI(id) ON DELETE CASCADE
);

CREATE TABLE Cambio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ci_id INT NOT NULL,
    fecha_cambio DATE,
    descripcion TEXT,
    FOREIGN KEY (ci_id) REFERENCES CI(id) ON DELETE CASCADE
);
