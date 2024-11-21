import { Request, Response } from "express";
import { ResponseModel } from "../shared/response.model";
import * as sectorService from "../services/sector.service";


export const listarSectores = async (req: Request, res: Response) => {
    try {
        const sectores = await sectorService.listarSectores();
        return res.json(ResponseModel.success(sectores));
    } catch (error) {
        return res.status(500).json(ResponseModel.error(error.message));
    }
}

export const insertarSector = async (req: Request, res: Response) => {
    try {
        const sectorData = req.body;
        const nuevoSector = await sectorService.insertarSector(sectorData);
        return res.json(ResponseModel.success(nuevoSector));
    } catch (error) {
        return res.status(500).json(ResponseModel.error(error.message));
    }
}