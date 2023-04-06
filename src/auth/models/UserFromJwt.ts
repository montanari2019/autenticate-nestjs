export class UserFromJwt{
    id: string | number;
    email: string;
    name_user: string;
    exp: number | string;
    iat: number
}