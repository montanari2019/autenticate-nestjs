export class UserFromJwt{
    id: string;
    email: string;
    name_user: string;
    exp: number | string;
    iat: number
}