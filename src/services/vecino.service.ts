import { Vecino } from '../entities/vecino';
import { Usuario } from '../entities/usuario';
import { AppDataSource } from '../config/db.config';
import { Repository } from 'typeorm';

const repository = AppDataSource.getRepository(Vecino);

export const insertarVecino = async (data: Partial<Vecino>): Promise<Vecino> => {
    const vecino = repository.create(data);
    await repository.save(vecino);
    return await repository.findOne({ where: { idVecino: vecino.idVecino, estadoAuditoria: '1' } });
}

export const listarVecinos = async (): Promise<Vecino[]> => {
    return await repository.find({ 
        where: { estadoAuditoria: '1' },
        relations: ['usuario','subsector']
    });
};
