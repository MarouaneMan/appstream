import { User } from "src/user/user.entity";

export interface RequestWithAuthenticatedUser extends Request {
    user?:User
}