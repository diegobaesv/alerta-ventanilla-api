
import { Request, Response } from 'express';
import { ResponseModel } from '../shared/response.model';
import * as subsectorService from '../services/subsector.service';

export const listarSubsectoresBySector = async (req: Request, res: Response) => {
    try {
        const { idSector } = req.params;
        const sectores = await subsectorService.listarSubsectoresBySector(idSector);
        return res.json(ResponseModel.success(sectores));
    } catch (error) {
        return res.status(500).json(ResponseModel.error(error.message));
    }
}