import { NextFunction, Request, Response } from 'express';
import { async } from 'rxjs';
import { CreateEmployeeDto, LoginUserDto, CreateUserDto } from '../dtos/users.dto';
import { RequestWithEmployee, RequestWithAdmin } from '../interfaces/auth.interface';
import { EmployeeInt, Admin } from '../interfaces/employees.interface.ts';
// import {  User } from '../interfaces/admin.interface';
import EmployeeAuthService from '../services/employeesAuth.service';


class EmployeeAuthController {
  public employeeAuthService = new EmployeeAuthService();

  // public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   try {
  //     const userData: CreateUserDto = req.body;
  //     const signUpUserData: User = await this.employeeAuthService.signup(userData);
      
  //     res.status(201).json({ data: signUpUserData, message: 'signup' });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  public logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: LoginUserDto = req.body;
      
      const { cookie, findUser } = await this.employeeAuthService.login(userData);

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: findUser, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithEmployee, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: EmployeeInt = req.user;
      const logOutUserData: EmployeeInt = await this.employeeAuthService.logout(userData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutUserData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };


  public getAllEmployees = async(req: Request, res: Response, next: NextFunction): Promise<void>  => {
    try{
     
      const findAllUsersData: EmployeeInt[] = await this.employeeAuthService.getAllEmployee();
    }catch(error) {
      next(error);
    }
  }
}

export default EmployeeAuthController;
