import { AppDataSource } from "../config/db.config";
import { Alerta } from "../entities/alerta";

const repository = AppDataSource.getRepository(Alerta);

export const insertarAlerta = async (data: Partial<Alerta>): Promise<Alerta> => {
    data.estadoAlerta = 'P';
    const alerta = repository.create(data);
    await repository.save(alerta);
    return await repository.findOne({ where: { idAlerta: alerta.idAlerta } });
}   