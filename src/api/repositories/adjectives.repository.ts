import { Adjective } from '../entities/adjective.entity';
import { DbConnection } from '../utils/db'

export async function addAdjective(adjective: Adjective): Promise<void> {
    const connection = await DbConnection.getConnection();
    const repository = connection.getRepository(Adjective);

    await repository.persist(adjective);
}

export async function getAllAdjectives(): Promise<Adjective[]> {
    const connection = await DbConnection.getConnection();
    const repository = connection.getRepository(Adjective);

    return await repository.find();
}