import { User } from "src/user/entities/user.entity"

export class UserToken{

    
    access_token: string;
    // iat: number;
    exp: number

    user: User
}