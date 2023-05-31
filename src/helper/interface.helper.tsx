export interface IRegister {
  email: string;
  name: string;
  password: string;
  confirmpassword?: string;
}

export interface ILogin {
  email: string;
  password: string;
}
