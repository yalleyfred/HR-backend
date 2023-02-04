import { Request } from 'express';
import { EmployeeInt, User } from './employees.interface.ts';
export interface DataStoredInToken {
    id: number;
}
export interface TokenData {
    token: string;
    expiresIn: number;
}
export interface RequestWithEmployee extends Request {
    user: EmployeeInt;
}
export interface RequestWithUser extends Request {
    user: User;
}
