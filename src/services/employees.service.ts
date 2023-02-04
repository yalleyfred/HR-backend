import { hash } from 'bcrypt';
import { CreateEmployeeDto } from '../dtos/users.dto';
import { HttpException } from '../exceptions/HttpException';
import { EmployeeInt, User } from '../interfaces/employees.interface.ts';
import Employees from '../models/employees.model';
import { isEmpty } from '../utils/util';

class EmployeeService {
  public employee = Employees;

  public async findAllEmployees(): Promise<EmployeeInt[]> {

    const users: EmployeeInt[] = await this.employee.findAll();
    return users;
  }

  public async findEmployeeById(userId: number): Promise<EmployeeInt> {

    const findUser: EmployeeInt = await this.employee.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "Employee doesn't exist");
    
    return findUser;
  }

  public async createEmployee(userData: CreateEmployeeDto): Promise<EmployeeInt> {

    
    
    if (isEmpty(userData)) throw new HttpException(400, "EmployeeData is empty");

    const findUser: EmployeeInt = await this.employee.findOne({
      where: {
        email: userData.email,
      },
    });
    
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: {
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
    }= { first_name: userData.first_name, last_name: userData.last_name, email: userData.email, password: hashedPassword, gender: userData.gender, dob: userData.dob, nationality: userData.nationality, highest_qualifications: userData.highest_qualifications, phone: userData.phone, department: userData.department, snnit_no: userData.snnit_no, tin: userData.tin};
    await this.employee.create(createUserData)
    return createUserData;
  }

  public async updateEmployee(userId: number, userData: CreateEmployeeDto): Promise<void> {

    if (isEmpty(userData)) throw new HttpException(400, "EmployeeData is empty");

    const findUser: EmployeeInt = await this.employee.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "Employee doesn't exist");
    // console.log(findUser);
    
    const hashedPassword = await hash(userData.password, 10);
    const updateUserData = await this.employee.update({ first_name: userData.first_name, last_name: userData.last_name, email: userData.email, password: hashedPassword, gender: userData.gender, dob: userData.dob, nationality: userData.nationality, highest_qualifications: userData.highest_qualifications, phone: userData.phone, department: userData.department, snnit_no: userData.snnit_no, tin: userData.tin }, {
      where: {
        id: userId
      }
    });

    
    return;
  }

  public async deleteEmployee(userId: number): Promise<void> {

    const findUser: EmployeeInt = await this.employee.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "Employee doesn't exist");


       await this.employee.destroy({
      where: {
        id: userId
      }
    });

    return
  }
}

export default EmployeeService;
