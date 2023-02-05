import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from 'sequelize-typescript';

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
};

@Table({
   tableName: "Employees",
   timestamps: true
})

export default class Employees extends Model implements EmployeesI{

    @AutoIncrement
    @PrimaryKey
    @Column
    id: number

    @AllowNull(false)
    @NotEmpty
    @Column
    first_name!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    last_name!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    email!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    password!: string


    @AllowNull(false)
    @NotEmpty
    @Column
    gender!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    dob!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    nationality!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    highest_qualifications!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    phone!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    department!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    snnit_no!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    tin!: string

    @AllowNull(true)
    @Column
    dept_id: number 
}


