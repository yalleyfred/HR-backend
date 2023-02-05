import { Model } from 'sequelize-typescript';
interface EmployeesI {
    id: number | null;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    gender: string;
    dob: string;
    nationality: string;
    highest_qualifications: string;
    phone: string;
    department: string;
    snnit_no: string;
    tin: string;
    dept_id: number | null;
}
export default class Employees extends Model implements EmployeesI {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    gender: string;
    dob: string;
    nationality: string;
    highest_qualifications: string;
    phone: string;
    department: string;
    snnit_no: string;
    tin: string;
    dept_id: number;
}
export {};
