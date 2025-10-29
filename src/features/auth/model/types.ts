import type { IUserDTO } from '../../../entities/user/model/type.ts'

export interface IAuthRequest {
    email: string;
    password: string;
}

export interface IAuthResponse {
    data: {
        user: IUserDTO
        token: string
    }
}
