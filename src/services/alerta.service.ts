import { In } from "typeorm";
import { AppDataSource } from "../config/db.config";
import { Alerta } from "../entities/alerta";

const repository = AppDataSource.getRepository(Alerta);

export const insertarAlerta = async (data: Partial<Alerta>): Promise<Alerta> => {
    data.estadoAlerta = 'P';
    const alerta = repository.create(data);
    await repository.save(alerta);
    return await repository.findOne({ where: { idAlerta: alerta.idAlerta } });
}


export const listarAlertas = async (): Promise<Alerta[]> => {
    return await repository.find({
        where: { estadoAuditoria: '1'},
        relations: ['vecino','serenazgo','vecino.usuario','serenazgo.usuario','categoria','subcategoria','subsector','subsector.sector'],
        order: { fechaCreacion: 'DESC' }
    });
}

export const listarAlertasBySerenazgo = async (idSerenazgo: number): Promise<Alerta[]> => {
    //where estadoo alerta in A,P
    return await repository.find({
        where: { serenazgo: { idSerenazgo: idSerenazgo }, estadoAlerta: In(['A','E']) },
        relations: ['vecino','serenazgo','vecino.usuario','serenazgo.usuario','categoria','subcategoria','subsector','subsector.sector'],
        order: { fechaCreacion: 'DESC' }
    });
}

export const asignarSereno = async (idAlerta: number, data: Partial<Alerta>): Promise<Alerta> => {
    await repository.update(idAlerta, { serenazgo: { idSerenazgo: data.serenazgo.idSerenazgo }, estadoAlerta: 'A' });
    return await repository.findOne({ where: { idAlerta } });
}

export const cambiarEstadoAlerta = async (idAlerta: number, estadoAlerta: string): Promise<Alerta> => {
    await repository.update(idAlerta, { estadoAlerta });
    return await repository.findOne({ where: { idAlerta } });
}