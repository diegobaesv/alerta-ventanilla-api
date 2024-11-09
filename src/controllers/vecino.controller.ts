import { Request, Response } from "express";
import { Vecino } from "../entities/vecino";
import { ResponseModel } from "../shared/response.model";
import { Usuario } from "../entities/usuario";
import * as usuarioService from "../services/usuario.service";
import * as vecinoService from "../services/vecino.service";
import { hashPassword } from "../shared/util";


export const insertarVecino = async (req: Request, res: Response): Promise<Response> => {
    try {
        const vecinoData: Partial<Vecino> = req.body;
        const usuarioData: Partial<Usuario> = vecinoData.usuario;
        usuarioData.clave = await hashPassword(usuarioData.documentoIdentidad);
        usuarioData.tipoUsuario = 'V'
        const nuevoUsuario = await usuarioService.insertarUsuario(usuarioData);
        vecinoData.usuario = nuevoUsuario;

        const nuevoVecino = await vecinoService.insertarVecino(vecinoData);
        return res.json(ResponseModel.success(nuevoVecino));
    } catch (error) {
        return res.status(500).json(ResponseModel.error(error.message));
    }
}
