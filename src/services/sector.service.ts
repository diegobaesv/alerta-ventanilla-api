import { Repository } from "typeorm";
import { Sector } from "../entities/sector";
import { AppDataSource } from "../config/db.config";


const repository = AppDataSource.getRepository(Sector);

export const listarSectores = async () => {
    return await repository.find({where: {estadoAuditoria: '1'}});
}