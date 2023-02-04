import { NextFunction, Request, Response } from 'express';
import EmployeeService from '../services/employees.service';
declare class EmployeeController {
    employeeService: EmployeeService;
    getEmployees: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getEmployeeById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createEmployee: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateEmployee: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteEmployee: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default EmployeeController;
