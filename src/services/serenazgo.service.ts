import { AppDataSource } from "../config/db.config";
import { Serenazgo } from "../entities/serenazgo";

const repository = AppDataSource.getRepository(Serenazgo);

export const listarSerenazgos = async (): Promise<Serenazgo[]> => {
    return await repository.find({ 
        where: { estadoAuditoria: '1' },
        relations: ['usuario','subsector', 'unidad']
    });
}

export const insertarSerenazgo = async (data: Partial<Serenazgo>): Promise<Serenazgo> => {
    const serenazgo = repository.create(data);
    await repository.save(serenazgo);
    return await repository.findOne({ where: { idSerenazgo: serenazgo.idSerenazgo, estadoAuditoria: '1' } });
}