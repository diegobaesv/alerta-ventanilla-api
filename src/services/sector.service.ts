import { Repository } from "typeorm";
import { Sector } from "../entities/sector";
import { AppDataSource } from "../config/db.config";


const repository = AppDataSource.getRepository(Sector);

export const listarSectores = async () => {
    return await repository.find({where: {estadoAuditoria: '1'}, relations: ['subsectores']});
}

export const insertarSector = async (data: Partial<Sector>): Promise<Sector> => {
    const sector = repository.create(data);
    await repository.save(sector);
    return await repository.findOne({ where: { idSector: sector.idSector, estadoAuditoria: '1' } });
}