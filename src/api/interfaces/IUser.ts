enum Gender {
    MALE,
    FEMALE
}

enum Role {
    STUDENT,
    TEACHER,
    ADMIN
}

export interface IRegisterUser {
    id?: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
    gender: Gender;
}

export interface ILoginUser {
    email: string;
    password: string;
}