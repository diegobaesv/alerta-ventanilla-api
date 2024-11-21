import * as vecinoService from '../services/vecino.service';
import * as serenazgoService from '../services/serenazgo.service';
import * as unidadService from '../services/unidad.service';
import * as sectorService from '../services/sector.service';
import * as subsectorService from '../services/subsector.service';
import * as categoriaService from '../services/categoria.service';
import * as alertaService from '../services/alerta.service';
import * as subcategoriaService from '../services/subcategoria.service';

export const dataPages = {
    'vecinos': async () => {
        const data = await vecinoService.listarVecinos();
        console.log(data);
        return {
            hasData: data.length > 0,
            data: data,
            metadata: undefined
        }
    },
    'alertas': async () => {
        const data = await alertaService.listarAlertas();
        const serenazgos = await serenazgoService.listarSerenazgos();
        console.log(JSON.stringify(data));
        return {
            hasData: data.length > 0,
            data: data,
            metadata: { serenazgos }
        }
    },
    'sectores': async () => {
        const data = await sectorService.listarSectores();
        return {
            hasData: data.length > 0,
            data: data,
            metadata: undefined
        }
    },
    'subsectores': async () => {
        const data = await subsectorService.listarSubsectores();
        const sectores = await sectorService.listarSectores();
        return {
            hasData: data.length > 0,
            data: data,
            metadata: {sectores}
        }
    },
    'unidades': async () => {
        const data = await unidadService.listarUnidades();
        return {
            hasData: data.length > 0,
            data: data,
            metadata: undefined
        }
    },
    'serenazgos': async () => {
        const data = await serenazgoService.listarSerenazgos();
        const unidades = await unidadService.listarUnidades();
        const sectores = await sectorService.listarSectores();
        const subsectores = await subsectorService.listarSubsectores();
        console.log({data, unidades, sectores, subsectores});
        return {
            hasData: data.length > 0,
            data: data,
            metadata: { unidades, sectores, subsectores }
        }
    },
    'categorias': async () => {
        const data = await categoriaService.listarCategorias();
        return {
            hasData: data.length > 0,
            data: data,
            metadata: undefined
        }
    },
    'subcategorias': async () => {
        const data = await subcategoriaService.listarSubcategorias();
        const categorias = await categoriaService.listarCategorias();
        return {
            hasData: data.length > 0,
            data: data,
            metadata: {categorias}
        }
    },
};

