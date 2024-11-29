import express, { Application } from 'express';
import logger from 'morgan';
import cors from 'cors';
import { AppDataSource } from './config/db.config';
import vecinoRoutes from './routes/vecino.route';
import sectorRoutes from './routes/sector.route';
import usuarioRoutes from './routes/usuario.route';
import subsectorRoutes from './routes/subsector.route';
import categoriaRoutes from './routes/categoria.route';
import alertaRoutes from './routes/alerta.route';
import subcategoriaRoutes from './routes/subcategoria.route';
import serenazgoRoutes from './routes/serenazgo.route';
import unidadRoutes from './routes/unidad.route';
import viewRoutes from './routes/view.route';
import path from 'path';

const app: Application = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb'  })); 
app.use(logger('dev'));
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/api/v1/vecinos', vecinoRoutes);
app.use('/api/v1/sectores', sectorRoutes);
app.use('/api/v1/subsectores', subsectorRoutes);
app.use('/api/v1/usuarios', usuarioRoutes); 
app.use('/api/v1/categorias', categoriaRoutes);
app.use('/api/v1/alertas', alertaRoutes);
app.use('/api/v1/subcategorias', subcategoriaRoutes);
app.use('/api/v1/serenazgos', serenazgoRoutes);
app.use('/api/v1/unidades', unidadRoutes);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', viewRoutes);

app.use((req, res, next) => {
    res.status(404).render('pages/404');
});

export const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Conexión a la base de datos establecida correctamente');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
};

export default app;