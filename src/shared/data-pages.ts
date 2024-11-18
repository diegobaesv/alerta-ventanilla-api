import * as vecinoService from '../services/vecino.service';
import * as serenazgoService from '../services/serenazgo.service';
import * as unidadService from '../services/unidad.service';
import * as sectorService from '../services/sector.service';
import * as subsectorService from '../services/subsector.service';
import * as categoriaService from '../services/categoria.service';

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
    'mrcsise-marcaciones': async () => {
        const data = {rows: []} //await mrcsiseMarcacionService.listarMarcaciones();
        return {
            hasData: data.rows.length > 0,
            data: data.rows,
            metadata: undefined
        }
    },
};

