export interface IUser {
    id: number;
    name?: string;
    email: string;
    avatarPath?: string;
    verificationToken?: string;
}

export interface IAuthRequest {
    email: string;
    password: string;
}

export interface IAuthResponse {
    accessToken: string;
    user: IUser;
}
