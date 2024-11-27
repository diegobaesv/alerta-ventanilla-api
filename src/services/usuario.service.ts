import { Repository } from "typeorm";
import { AppDataSource } from "../config/db.config";
import { Usuario } from "../entities/usuario";
import { comparePassword } from "../shared/util";

const repository = AppDataSource.getRepository(Usuario);

export const insertarUsuario = async (data: Partial<Usuario>): Promise<Usuario> => {
    const usuario = repository.create(data);
    await repository.save(usuario);
    return await repository.findOne({ where: { idUsuario: usuario.idUsuario, estadoAuditoria: '1' } });
}

export const login = async (documentoIdentidad: string, clave: string, tipoUsuario: string): Promise<Usuario> => {
    console.log('documentoIdentidad',documentoIdentidad);
    console.log('clave',clave);
    console.log('tipoUsuario',tipoUsuario);
    const usuario =  await repository.findOne({
        where: { 
            documentoIdentidad: documentoIdentidad, 
            tipoUsuario: tipoUsuario, 
            estadoAuditoria: '1' 
        },
        relations: ['vecino', 'vecino.subsector','vecino.usuario','serenazgo','serenazgo.subsector','serenazgo.usuario'] 
    });    
    console.log('usuario',usuario);
    if (!usuario || !(await comparePassword(clave, usuario.clave))) {
        throw new Error('Usuario o contraseña incorrectos');
    }
    return usuario;
}