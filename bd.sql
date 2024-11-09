CREATE TABLE usuarios (
  id_usuario SERIAL PRIMARY KEY,
  documento_identidad VARCHAR(12) NOT NULL UNIQUE,
  clave VARCHAR(60) NOT NULL,
  apellido_paterno VARCHAR(50),
  apellido_materno VARCHAR(50),
  nombres VARCHAR(100),
  tipo_usuario CHAR(1),
  estado_auditoria CHAR(1) DEFAULT '1',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sectores (
  id_sector SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  estado_auditoria CHAR(1) DEFAULT '1',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE subsectores (
  id_subsector SERIAL PRIMARY KEY,
  id_sector INTEGER REFERENCES sectores(id_sector),
  nombre VARCHAR(100),
  estado_auditoria CHAR(1) DEFAULT '1',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE unidades (
  id_unidad SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  estado_auditoria CHAR(1) DEFAULT '1',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE vecinos (
  id_vecino SERIAL PRIMARY KEY,
  id_usuario INTEGER REFERENCES usuarios(id_usuario),
  id_subsector INTEGER REFERENCES subsectores(id_subsector),
  telefono VARCHAR(15),
  direccion VARCHAR(200),
  latitud VARCHAR(20),
  longitud VARCHAR(20),
  estado_auditoria CHAR(1) DEFAULT '1',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE serenazgos (
  id_serenazgo SERIAL PRIMARY KEY,
  id_usuario INTEGER REFERENCES usuarios(id_usuario),
  id_subsector INTEGER REFERENCES subsectores(id_subsector),
  id_unidad INTEGER REFERENCES unidades(id_unidad),
  telefono VARCHAR(15),
  direccion VARCHAR(200),
  estado_auditoria CHAR(1) DEFAULT '1',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categorias (
  id_categoria SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  descripcion VARCHAR(200),
  icono VARCHAR(200),
  estado_auditoria CHAR(1) DEFAULT '1',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE alertas (
  id_alerta SERIAL PRIMARY KEY,
  id_vecino INTEGER REFERENCES vecinos(id_vecino),
  id_serenazgo INTEGER REFERENCES serenazgos(id_serenazgo),
  id_categoria INTEGER REFERENCES categorias(id_categoria),
  id_subsector INTEGER REFERENCES subsectores(id_subsector),
  descripcion VARCHAR(500),
  latitud VARCHAR(20),
  longitud VARCHAR(20),
  estado_alerta CHAR(1),
  estado_auditoria CHAR(1) DEFAULT '1',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


insert into sectores(nombre) values ('Sector 1');
insert into sectores(nombre) values ('Sector 2');
insert into sectores(nombre) values ('Sector 3');
insert into sectores(nombre) values ('Sector 4');
insert into sectores(nombre) values ('Sector 5');

INSERT INTO subsectores (nombre, id_sector) VALUES
('SUB - SECTOR 1A', 1),
('SUB - SECTOR 1B', 1),
('SUB - SECTOR 1C', 1),
('SUB - SECTOR 2A', 2),
('SUB - SECTOR 2B', 2),
('SUB - SECTOR 2C', 2),
('SUB - SECTOR 3A', 3),
('SUB - SECTOR 3B', 3),
('SUB - SECTOR 3C', 3),
('SUB - SECTOR 4A', 4),
('SUB - SECTOR 4B', 4),
('SUB - SECTOR 4C', 4),
('SUB - SECTOR 5A', 5),
('SUB - SECTOR 5B', 5),
('SUB - SECTOR 5C', 5);




INSERT INTO categorias (nombre, descripcion, icono) VALUES
('Violencia', 'Familiar y Domestica', 'family_restroom'),
('Incendio', 'Vivienda o Edificio', 'local_fire_department'),
('Accidente', 'Accidente Automovilístico', 'directions_car'),
('Robo', 'Robo a Persona o Propiedad', 'security'),
('Desastre Natural', 'Inundación o Terremoto', 'landslide');
