import { Address } from "./Address.interface"

export interface User extends Address {
    pseudo?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    confirmation?: string;

  }

  export interface UserLogin {
    email: string,
    password: string,
  }