export interface IRegister {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: string;
  classRoom: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginStudentInfo {
  data: {
    token: string;
    user: {
      id: number;
      name: string;
      createdAt: string;
      classRoom: string;
      picture?: string | null;
      email: string;
      lastName: string;
      password: string;
      role: string;
      updatedAt: string;
      username: string;
    };
  };
}

export interface ILoginStudentPersonalInfo {
  id: number;
  name: string;
  createdAt: string;
  classRoom: string;
  picture?: string | null;
  email: string;
  lastName: string;
  password: string;
  role: string;
  updatedAt: string;
  username: string;
}


export type StudentBasicInfo = Pick<ILoginStudentPersonalInfo, 'name' | 'username' | 'classRoom' | 'createdAt'>
export type IUpdateStudent = Partial<ILoginStudentPersonalInfo>;

export interface INewPasswordStudent {
  username: string;
  newPassword: string;
}