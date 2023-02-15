export interface IStudent {
    createdAt: string
    email: string
    id: string
    lastName: string
    name: string
    password: string
    role: string,
    updatedAt: string
}

export interface IRegisterStudent {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface ILoginStudent {
    email: string;
    password: string;
}

export interface INewRegisteredStudent {
    data: {
        accessToken: string;
        refreshToken: string;
        newStudent: IStudent
    }
}

export interface INewLoggedStudent {
    data: {
        accessToken: string;
        refreshToken: string;
        existingUser: IStudent
    }
}
