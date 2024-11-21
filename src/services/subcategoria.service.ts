import { AppDataSource } from "../config/db.config";
import { Subcategoria } from "../entities/subcategoria";

const repository = AppDataSource.getRepository(Subcategoria);

export const listarSubcategoriasByCategoria = async (idCategoria: number) => {
    return await repository.find({
        where: { categoria: { idCategoria: idCategoria }, estadoAuditoria: '1'}
    });
}

export const listarSubcategorias = async () => {
    return await repository.find({
        where: { estadoAuditoria: '1' },
        relations: ['categoria']
    });
}

export const insertarSubcategoria = async (data: Partial<Subcategoria>) => {
    const subcategoria = repository.create(data);
    return await repository.save(subcategoria);
}