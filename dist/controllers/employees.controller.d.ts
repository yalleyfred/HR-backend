import { NextFunction, Request, Response } from 'express';
import employeeService from '../services/employees.service';
declare class EmployeeController {
    employeeService: employeeService;
    getEmployees: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getEmployeeById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createEmployee: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateEmployee: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteEmployee: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default EmployeeController;
