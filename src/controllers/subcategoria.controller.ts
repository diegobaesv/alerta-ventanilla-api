
import { Request, Response } from 'express';
import { ResponseModel } from '../shared/response.model';
import * as subcategoriaService from '../services/subcategoria.service';

export const listarSubcategoriasByCategoria = async (req: Request, res: Response) => {
    try {
        const { idCategoria } = req.params;
        const subcategorias = await subcategoriaService.listarSubcategoriasByCategoria(idCategoria);
        return res.json(ResponseModel.success(subcategorias));
    } catch (error) {
        return res.status(500).json(ResponseModel.error(error.message));
    }
}

export const insertarSubcategoria = async (req: Request, res: Response) => {
    try {
        const subcategoria = await subcategoriaService.insertarSubcategoria(req.body);
        return res.json(ResponseModel.success(subcategoria));
    } catch (error) {
        return res.status(500).json(ResponseModel.error(error.message));
    }
}