import { User } from '../entities/user.entity';
import { DbConnection } from '../utils/db'

export async function findUser(username: string): Promise<User | undefined> {
    const connection = await DbConnection.getConnection();
    const repository = connection.getRepository(User);

    return await repository.findOne({'username': username});
}
