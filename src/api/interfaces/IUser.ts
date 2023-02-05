export interface IRegisterUser {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface ILoginUser {
    email: string;
    password: string;
}