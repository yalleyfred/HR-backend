import { NextFunction, Request, Response } from 'express';
import { RequestWithEmployee } from '../interfaces/auth.interface';
import EmployeeAuthService from '../services/employeesAuth.service';
declare class EmployeeAuthController {
    employeeAuthService: EmployeeAuthService;
    logIn: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    logOut: (req: RequestWithEmployee, res: Response, next: NextFunction) => Promise<void>;
}
export default EmployeeAuthController;
