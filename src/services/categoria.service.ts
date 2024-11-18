import { AppDataSource } from "../config/db.config";
import { Categoria } from "../entities/categoria";

const repository = AppDataSource.getRepository(Categoria);

export const listarCategorias = async (): Promise<Categoria[]> => {
    return await repository.find({ where: { estadoAuditoria: '1' } });
}

export const insertarCategoria = async (data: Partial<Categoria>): Promise<Categoria> => {
    const categoria = repository.create(data);
    await repository.save(categoria);
    return await repository.findOne({ where: { idCategoria: categoria.idCategoria, estadoAuditoria: '1' } });
}