import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '../config';
import { CreateEmployeeDto, LoginUserDto } from '../dtos/users.dto';
import { HttpException } from '../exceptions/HttpException';
import { DataStoredInToken, TokenData } from '../interfaces/auth.interface';
import { EmployeeInt, Admin } from '../interfaces/employees.interface.ts';
import Employees from '../models/employees.model';
import { isEmpty } from '../utils/util';

class EmployeesAuthService {
  public employee = Employees;

//   public async signup(userData: CreateEmployeeDto): Promise<EmployeeInt> {
// ;
//     if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

//     const findUser: EmployeeInt = await this.employee.findOne({
//       where: {
//         email: userData.email,
//       },
//     });
//     if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

//     const hashedPassword = await hash(userData.password, 10);
//     const createUserData: {
//   first_name: string;
//   last_name: string;
//   email: string;
//   password: string;
//   gender: string;
//   dob: string;
//   nationality: string;
//   highest_qualifications: string;
//   phone: string;
//   city: string;
//   sponsor_name: string;
//   sponsor_email: string;
//   sponsor_phone: string;
// }= { first_name: userData.first_name, last_name: userData.last_name, email: userData.email, password: hashedPassword, gender: userData.gender, dob: userData.dob, nationality: userData.nationality, highest_qualifications: userData.highest_qualifications, phone: userData.phone, city: userData.city, sponsor_name: userData.sponsor_name, sponsor_email: userData.sponsor_email, sponsor_phone: userData.sponsor_phone };
//     await this.employee.create(createUserData)

//     return createUserData;
//   }

  public async login(userData: LoginUserDto): Promise<{ cookie: string; findUser: EmployeeInt }> {

    if (isEmpty(userData)) throw new HttpException(400, "EmployeeData is empty");

    const findUser: {
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
    }= await this.employee.findOne({
      where: {
        email: userData.email,
      },
    });
    
    if (!findUser) throw new HttpException(409, `This email ${userData.email} was not found`);

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");

    
    const tokenData = this.createToken(findUser);
    const cookie = this.createCookie(tokenData);
    
    return { cookie, findUser };
  }

  public async logout(userData: EmployeeInt): Promise<EmployeeInt> {

    if (isEmpty(userData)) throw new HttpException(400, "EmployeeData is empty");

    const findUser: {
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
    } = await this.employee.findOne({
      where: {
        email: userData.email,
        password: userData.password
      },
    });
    if (!findUser) throw new HttpException(409, "Employee doesn't exist");

    return findUser;
  }

  public createToken(user: {id: number;}): TokenData {
    const dataStoredInToken: DataStoredInToken = { id: user.id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }

  public async getAllEmployee(): Promise<EmployeeInt[]> {
    const AllEmployee = await this.employee.findAll();
    return AllEmployee
  }
}

export default EmployeesAuthService;
