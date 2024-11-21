import { AppDataSource } from "../config/db.config";
import { Unidad } from "../entities/unidad";

const repository = AppDataSource.getRepository(Unidad);

export const listarUnidades = async () => {
    return await repository.find({
        where: { estadoAuditoria: '1' }
    });
};

export const insertarUnidad = async (data: Partial<Unidad>) => {
    const unidad = repository.create(data);
    return await repository.save(unidad);
}

export const eliminarUnidad = async (idUnidad: number) => {
    return await repository.delete(idUnidad);
}