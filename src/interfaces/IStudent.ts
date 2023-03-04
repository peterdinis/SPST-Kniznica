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
      createdAt: string;
      classRoom: string;
      email: string;
      lastName: string;
      password: string;
      role: string;
      updatedAt: string;
      username: string;
    }
  }
}