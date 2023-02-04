import { Model } from 'sequelize-typescript';
interface DepartmentI {
    id: number | null;
    name: string;
}
export default class Department extends Model implements DepartmentI {
    id: number;
    name: string;
}
export {};
