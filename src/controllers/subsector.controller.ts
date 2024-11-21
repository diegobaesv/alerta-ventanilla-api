
import { Request, Response } from 'express';
import { ResponseModel } from '../shared/response.model';
import * as subsectorService from '../services/subsector.service';

export const listarSubsectoresBySector = async (req: Request, res: Response) => {
    try {
        const { idSector } = req.params;
        const subcategorias = await subsectorService.listarSubsectoresBySector(idSector);
        return res.json(ResponseModel.success(subcategorias));
    } catch (error) {
        return res.status(500).json(ResponseModel.error(error.message));
    }
}

export const insertarSubsector = async (req: Request, res: Response) => {
    try {
        const subsector = await subsectorService.insertarSubsector(req.body);
        return res.json(ResponseModel.success(subsector));
    } catch (error) {
        return res.status(500).json(ResponseModel.error(error.message));
    }
}