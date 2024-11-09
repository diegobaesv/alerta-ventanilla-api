import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { DB_DATABASE, DB_HOST, DB_LOGGING, DB_PASSWORD, DB_PORT, DB_SYNCHRONIZE, DB_TYPE, DB_USER } from '../shared/constants';
import { Sector } from '../entities/sector';
import { Usuario } from '../entities/usuario';
import { Subsector } from '../entities/subsector';
import { Vecino } from '../entities/vecino';
import { Alerta } from '../entities/alerta';
import { Categoria } from '../entities/categoria';
import { Serenazgo } from '../entities/serenazgo';
import { Unidad } from '../entities/unidad';

export const AppDataSource = new DataSource({
    type: DB_TYPE as any,
    host: DB_HOST,
    port: parseInt(DB_PORT || '5432', 10),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: false,
    logging: DB_LOGGING === 'true',
    entities: [Sector, Subsector, Usuario, Vecino, Alerta, Categoria,Serenazgo,Unidad],
});
    