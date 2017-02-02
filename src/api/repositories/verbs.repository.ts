import { Verb } from '../entities/verb.entity';
import { DbConnection } from '../utils/db'

export enum Level {
    Full,
    Overview
}

export async function getAllVerbs(level: Level): Promise<Verb[]> {
    const connection = await DbConnection.getConnection();
    const repository = connection.getRepository(Verb);

    switch (level) {
        case Level.Overview:
            return await repository.find();   
        case Level.Full:
            return await repository.find({
                alias: 'verb',
                innerJoinAndSelect: { 'tenses': 'verb.tenses' }
            });
    }
}