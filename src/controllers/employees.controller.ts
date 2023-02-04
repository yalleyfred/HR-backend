import { NextFunction, Request, Response } from 'express';
import { CreateEmployeeDto } from '../dtos/users.dto';
import { User, EmployeeInt } from '../interfaces/student.interface';
import employeeService from '../services/employees.service';
import Admins from '@models/admins.model';
// import {LocalDB} from '../Database'

class EmployeeController {
  public employeeService = new employeeService();

  public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllUsersData: EmployeeInt[] = await this.employeeService.findAllUser();
    
      
      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const findOneUserData: EmployeeInt = await this.employeeService.findUserById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateEmployeeDto = req.body;
      // console.log(userData);
      const createUserData: EmployeeInt = await this.employeeService.createUser(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const userData: CreateEmployeeDto = req.body;
      const updateUserData: EmployeeInt[] = await this.employeeService.updateUser(userId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const deleteUserData: EmployeeInt[] = await this.employeeService.deleteUser(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default EmployeeController;
