import { Request, Response } from "express";
import { ResponseModel } from "../shared/response.model";
import { Alerta } from "../entities/alerta";
import * as alertaService from "../services/alerta.service";

export const insertarAlerta = async (req: Request, res: Response): Promise<ResponseModel> => {
    try {
        const alertaData: Partial<Alerta> = req.body;
        const nuevaAlerta = await alertaService.insertarAlerta(alertaData);
        return res.json(ResponseModel.success(nuevaAlerta));
    } catch (error) {
        console.log(error);
        return res.status(500).json(ResponseModel.error(error.message));
    }    
}

export const asignarSereno = async (req: Request, res: Response): Promise<ResponseModel> => {
    try {
        const idAlerta = parseInt(req.params.idAlerta);
        const alertaData: Partial<Alerta> = req.body;
        const alertaActualizada = await alertaService.asignarSereno(idAlerta, alertaData);
        return res.json(ResponseModel.success(alertaActualizada));
    } catch (error) {
        console.log(error);
        return res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarAlertasByVecino= async (req: Request, res: Response): Promise<ResponseModel> => {
    try {
        const idVecino = parseInt(req.params.idVecino);
        const alertas = await alertaService.listarAlertasByVecino(idVecino);
        return res.json(ResponseModel.success(alertas));
    } catch (error) {
        console.log(error);
        return res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarAlertasBySerenazgo = async (req: Request, res: Response): Promise<ResponseModel> => {
    try {
        const idSerenazgo = parseInt(req.params.idSerenazgo);
        const completo = req.query.completo === 'true';
        const alertas = await alertaService.listarAlertasBySerenazgo(idSerenazgo, completo);
        return res.json(ResponseModel.success(alertas));
    } catch (error) {
        console.log(error);
        return res.status(500).json(ResponseModel.error(error.message));
    }
}

export const actualizarAlerta = async (req: Request, res: Response): Promise<ResponseModel> => {
    try {
        const idAlerta = parseInt(req.params.idAlerta);
        const alertaActualizada = await alertaService.actualizarAlerta(idAlerta, req.body);
        return res.json(ResponseModel.success(alertaActualizada));
    } catch (error) {
        console.log(error);
        return res.status(500).json(ResponseModel.error(error.message));
    }
}
