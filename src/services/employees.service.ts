import { hash } from 'bcrypt';
import { CreateEmployeeDto } from '../dtos/users.dto';
import { HttpException } from '../exceptions/HttpException';
import { EmployeeInt, User } from '../interfaces/student.interface';
import Employees from '../models/employees.model';
// import {LocalDB} from '../Database'
import { isEmpty } from '../utils/util';

class EmployeeService {
  public users = Employees;

  public async findAllUser(): Promise<EmployeeInt[]> {
    // AdminMap(LocalDB);
    const users: EmployeeInt[] = await this.users.findAll();
    return users;
  }

  public async findUserById(userId: number): Promise<EmployeeInt> {
    // AdminMap(LocalDB);
    const findUser: EmployeeInt = await this.users.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "Employee doesn't exist");
    console.log(findUser);
    
    return findUser;
  }

  public async createUser(userData: CreateEmployeeDto): Promise<EmployeeInt> {
    // AdminMap(LocalDB);
    
    
    if (isEmpty(userData)) throw new HttpException(400, "EmployeeData is empty");

    const findUser: EmployeeInt = await this.users.findOne({
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
    await this.users.create(createUserData)
    return createUserData;
  }

  public async updateUser(userId: number, userData: CreateEmployeeDto): Promise<EmployeeInt[]> {
    // AdminMap(LocalDB);
    if (isEmpty(userData)) throw new HttpException(400, "EmployeeData is empty");

    const findUser: EmployeeInt[] = await this.users.findAll({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "Employee doesn't exist");

    const hashedPassword = await hash(userData.password, 10);
    const updateUserData: EmployeeInt[] = await findUser.map((user: EmployeeInt) => {
      // if (user.id === userId) user = { first_name: userData.first_name, last_name: userData.last_name, email: userData.email, password: hashedPassword, gender: userData.gender, dob: userData.dob, nationality: userData.nationality, highest_qualifications: userData.highest_qualifications, phone: userData.phone, city: userData.city, sponsor_name: userData.sponsor_name, sponsor_email: userData.sponsor_email, sponsor_phone: userData.sponsor_phone };
      return user;
    });

    return updateUserData;
  }

  public async deleteUser(userId: number): Promise<EmployeeInt[]> {
    // AdminMap(LocalDB)
    const findUser: EmployeeInt = await this.users.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "Employee doesn't exist");


    const deleteUserData: EmployeeInt[] = (await this.findAllUser())
    // .filter(user => user.id !== findUser.id)
    return deleteUserData;
  }
}

export default EmployeeService;
