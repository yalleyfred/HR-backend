
import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, Default } from 'sequelize-typescript';

interface AdminI {
   id: number | null;
   name: string;
   email: string;
   password: string;
   passwordResetToken: string;
   passwordResetExpires: Date;

};

@Table({
   tableName: "Admins",
   timestamps: true
})

export default class Admin extends Model implements AdminI{

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number

    @AllowNull(false)
    @NotEmpty
    @Column
    name!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    email!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    password!: string

    @AllowNull(true)
    @Column
    passwordResetExpires!: Date

    @AllowNull(true)
    @Column
    passwordResetToken!: string


}