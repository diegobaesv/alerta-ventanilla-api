import { AppDataSource } from "../config/db.config";
import { Subsector } from "../entities/subsector";

const repository = AppDataSource.getRepository(Subsector);

export const listarSubsectoresBySector = async (idSector: number) => {
    return await repository.find({
        where: { sector: { idSector: idSector }, estadoAuditoria: '1' }
    });
}

export const listarSubsectores = async () => {
    return await repository.find({
        where: { estadoAuditoria: '1' }
    });
}