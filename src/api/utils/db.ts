import { createConnection, Connection } from 'typeorm';
import { User } from '../entities/user.entity';
import { Noun } from '../entities/noun.entity';
import { Adjective } from '../entities/adjective.entity';
import { Primitive } from '../entities/primitive.entity';
import { Tense } from '../entities/tense.entity';
import { Verb } from '../entities/verb.entity';
import { Conjunction } from '../entities/conjunction.entity';

export class DbConnection {
    private static g__connection: Connection = undefined;

    private static async createConnection(): Promise<Connection> {
        const dbConnectionString = process.env.DATABASE_URL;
        
        console.log('Connecting to DB using connection string \'' + dbConnectionString + '\'');

        return await createConnection({
            driver: {
                type: 'postgres',
                url: dbConnectionString,
                extra: {'ssl': true}
            },
            entities: [
                User,
                Noun,
                Adjective,
                Primitive,
                Tense,
                Verb,
                Conjunction
            ]});
    }

    public static async getConnection(): Promise<Connection> {
        if (DbConnection.g__connection == undefined) {
            DbConnection.g__connection = await DbConnection.createConnection();
        }

        return DbConnection.g__connection;
    }
}