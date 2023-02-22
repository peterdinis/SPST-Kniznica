export interface ITeacher {
    createdAt: string;
    email: string;
    id: string;
    lastName: string;
    name: string;
    password: string;
    updatedAt: string;
    role: string;
}

export interface IRegisterTeacher {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface ILoginTeacher {
    email: string;
    password: string;
}

export interface INewRegisteredTeacher {
    data: {
        accessToken: string;
        refreshToken: string;
        newTeacher: ITeacher
    }
}

export interface INewLoggedTeacher {
    data: {
        accessToken: string;
        refreshToken: string;
        existingTeacher: ITeacher
    }
}
