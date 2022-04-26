import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';

/**
 * Salt rounds used to generate bcrypt hash
 */
const BCRYPT_SALT_ROUND = 10

@Injectable()
export class AuthService {

    async hashPlainPassword(plainPassword:string) : Promise<string>
    {
        return bcrypt.hash(plainPassword, BCRYPT_SALT_ROUND);
    }

    async compareHashToPlainPassword(plainPassword:string, hash:string) : Promise<boolean>
    {
        return bcrypt.compare(plainPassword, hash)
    }
}
