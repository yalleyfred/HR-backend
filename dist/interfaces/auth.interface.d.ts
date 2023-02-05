import { Request } from 'express';
import { EmployeeInt, Admin } from './employees.interface.ts';
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
export interface RequestWithAdmin extends Request {
    user: Admin;
}
