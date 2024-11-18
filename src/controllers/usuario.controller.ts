import { Request, Response } from "express";
import { ResponseModel } from "../shared/response.model";
import * as usuarioService from "../services/usuario.service";

export const login = async (req: Request, res: Response): Promise<ResponseModel> => {
    try {
        const { documentoIdentidad, clave, tipoUsuario} = req.body;
        const usuario = await usuarioService.login(documentoIdentidad, clave, tipoUsuario);
        return res.json(ResponseModel.success(usuario));
    } catch (error) {
        console.error('usuario.controller::login', error);
        return res.status(500).json(ResponseModel.error(error.message));
    }
}