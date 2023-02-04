import { NextFunction, Request, Response } from 'express';
import DepartmentService from '../services/department.service';
declare class DepartmentController {
    departmentService: DepartmentService;
    getDepartments: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getDepartmentById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createDepartment: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateDepartment: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteDepartment: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default DepartmentController;
