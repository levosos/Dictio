import { Conjunction } from '../entities/conjunction.entity';
import { DbConnection } from '../utils/db'

export async function addConjunction(conjunction: Conjunction): Promise<void> {
    const connection = await DbConnection.getConnection();
    const repository = connection.getRepository(Conjunction);

    await repository.persist(conjunction);
}

export async function getAllConjunctions(): Promise<Conjunction[]> {
    const connection = await DbConnection.getConnection();
    const repository = connection.getRepository(Conjunction);

    return await repository.find();
}