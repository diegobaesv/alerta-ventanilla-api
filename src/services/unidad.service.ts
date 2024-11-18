import { AppDataSource } from "../config/db.config";
import { Unidad } from "../entities/unidad";

const repository = AppDataSource.getRepository(Unidad);

export const listarUnidades = async () => {
    return await repository.find({
        where: { estadoAuditoria: '1' }
    });
};