import { ResponseModel } from "../shared/response.model";
import { Request, Response } from 'express';
import * as unidadService from '../services/unidad.service';

export const insertarUnidad = async (req: Request, res: Response) => {
    try {
        const unidad = await unidadService.insertarUnidad(req.body);
        return res.json(ResponseModel.success(unidad));
    } catch (error) {
        console.error(error);
        return res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarUnidad = async (req: Request, res: Response) => {
    try {
        const { idUnidad } = req.params;
        const result = await unidadService.eliminarUnidad(parseInt(idUnidad));
        return res.json(ResponseModel.success(result));
    } catch (error) {
        console.error(error);
        return res.status(500).json(ResponseModel.error(error.message));
    }
}