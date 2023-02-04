import { Request } from 'express';
import { EmployeeInt, User } from '../interfaces/student.interface';
// import { Cou } from './course.interface';

export interface DataStoredInToken {
  id: number;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithStudent extends Request {
  user: EmployeeInt;
}

export interface RequestWithUser extends Request {
  user: User;
}

// export interface RequestCreateCourse extends Request {
//   user: Cou;
// }

