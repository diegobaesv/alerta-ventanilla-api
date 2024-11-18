import { AppDataSource } from "../config/db.config";
import { Subcategoria } from "../entities/subcategoria";

const repository = AppDataSource.getRepository(Subcategoria);

export const listarSubcategoriasByCategoria = async (idCategoria: number) => {
    return await repository.find({
        where: { categoria: { idCategoria: idCategoria }, estadoAuditoria: '1'}
    });
}