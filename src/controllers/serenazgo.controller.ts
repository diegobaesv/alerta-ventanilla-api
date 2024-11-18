import { Request, Response } from "express";
import { Serenazgo } from "../entities/serenazgo";
import * as serenazgoService from "../services/serenazgo.service";
import * as usuarioService from "../services/usuario.service";
import { ResponseModel } from "../shared/response.model";
import { Usuario } from "../entities/usuario";
import { hashPassword } from "../shared/util";

export const insertarSerenazgo = async (req: Request, res: Response) => {
    try {
        const serenazgoData: Partial<Serenazgo> = req.body;
        const usuarioData: Partial<Usuario> = serenazgoData.usuario;
        usuarioData.clave = await hashPassword(usuarioData.documentoIdentidad);
        usuarioData.tipoUsuario = 'S'
        const nuevoUsuario = await usuarioService.insertarUsuario(usuarioData);
        serenazgoData.usuario = nuevoUsuario;

        const serenazgo = await serenazgoService.insertarSerenazgo(serenazgoData);
        return res.json(ResponseModel.success(serenazgo));
    } catch (error) {
        console.error(error);
        return res.status(500).json(ResponseModel.error(error.message));
    }
}


