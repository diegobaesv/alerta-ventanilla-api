import { Request, Response } from 'express';
import * as categoriaService from '../services/categoria.service';
import { ResponseModel } from '../shared/response.model';

export const listarCategorias = async (req: Request, res: Response) => {
    try {
        const categorias = await categoriaService.listarCategorias();
        return res.json(ResponseModel.success(categorias));
    } catch (error) {
        return res.status(500).json(ResponseModel.error(error.message));
    }
}

export const insertarCategoria = async (req: Request, res: Response) => {
    try {
        const categoriaData = req.body;
        const categoria = await categoriaService.insertarCategoria(categoriaData);
        return res.json(ResponseModel.success(categoria));
    } catch (error) {
        return res.status(500).json(ResponseModel.error(error.message));
    }
}