import { Noun } from '../entities/noun.entity';
import { DbConnection } from '../utils/db'

export async function addNoun(noun: Noun): Promise<void> {
    const connection = await DbConnection.getConnection();
    const repository = connection.getRepository(Noun);

    await repository.persist(noun);
}

export async function getAllNouns(): Promise<Noun[]> {
    const connection = await DbConnection.getConnection();
    const repository = connection.getRepository(Noun);

    return await repository.find();   
}