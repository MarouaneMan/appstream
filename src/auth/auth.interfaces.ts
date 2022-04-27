import { User } from "src/user/user.entity";

export type AuthenticatedUser = Omit<User, 'passwordHash'>;

export interface RequestWithAuthenticatedUser extends Request {
    user?:AuthenticatedUser
}

export type JwtPayload = {
    readonly sub:string
    readonly email:string
}