import { User } from "./user.model";

export interface LoginRequest {
    username: string;
    password: string;
  }
  
  export interface SignupRequest {
    name: string;
    username: string;
    email: string;
    phone: string;
    password: string;
  }
  
  export interface AuthResponse {
    token: string;
    user: User;
  }