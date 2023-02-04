import { NextFunction, Request, Response } from 'express';
import { CreateEmployeeDto } from '../dtos/users.dto';
import { User, EmployeeInt } from '../interfaces/employees.interface.ts';
import employeeService from '../services/employees.service';
import Admins from '@models/admins.model';
// import {LocalDB} from '../Database'

class EmployeeController {
  public employeeService = new employeeService();

  public getEmployees = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllUsersData: EmployeeInt[] = await this.employeeService.findAllEmployees();
    
      
      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getEmployeeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const findOneUserData: EmployeeInt = await this.employeeService.findEmployeeById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateEmployeeDto = req.body;
      // console.log(userData);
      const createUserData: EmployeeInt = await this.employeeService.createEmployee(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const userData: CreateEmployeeDto = req.body;
       await this.employeeService.updateEmployee(userId, userData);

      res.status(200).json({ message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteEmployee = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
       await this.employeeService.deleteEmployee(userId);

      res.status(200).json({  message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default EmployeeController;
