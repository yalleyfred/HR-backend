import { Model } from 'sequelize-typescript';
interface AdminI {
    id: number | null;
    name: string;
    email: string;
    password: string;
    passwordResetToken: string;
    passwordResetExpires: Date;
}
export default class Admin extends Model implements AdminI {
    id: number;
    name: string;
    email: string;
    password: string;
    passwordResetExpires: Date;
    passwordResetToken: string;
}
export {};
