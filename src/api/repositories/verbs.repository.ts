import { Verb } from '../entities/verb.entity';
import { DbConnection } from '../utils/db'

export async function getAllVerbsOverview(): Promise<Verb[]> {
    const connection = await DbConnection.getConnection();
    const repository = connection.getRepository(Verb);

    return await repository.find();   
}

export async function getVerb(id: number): Promise<Verb> {
    const connection = await DbConnection.getConnection();
    const repository = connection.getRepository(Verb);

    const verb = await repository.findOne(
        {
            id: id
        },
        {
            alias: 'verb',
            innerJoinAndSelect: { 'tenses': 'verb.tenses' }
        });

    if (verb === undefined) {
        throw new Error();
    }

    return verb;
}