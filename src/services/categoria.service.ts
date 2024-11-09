import { AppDataSource } from "../config/db.config";
import { Categoria } from "../entities/categoria";

const repository = AppDataSource.getRepository(Categoria);

export const listarCategorias = async (): Promise<Categoria[]> => {
    return await repository.find({ where: { estadoAuditoria: '1' } });
}