import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from 'sequelize-typescript';

interface DepartmentI {
     id: number | null;
    name: string;
}

@Table({
    tableName: "Department",
    timestamps: true
 })
 
 export default class Department extends Model implements DepartmentI{ 
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number

    @AllowNull(false)
    @NotEmpty
    @Column
    name!: string
 }