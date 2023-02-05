import EmployeeAuthController from '../controllers/employeeAuth.controller';
import DepartmentController from '../controllers/department.controller';
import { Routes } from '../interfaces/routes.interface';
declare class AuthRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    employeeAuthController: EmployeeAuthController;
    departmentController: DepartmentController;
    constructor();
    private initializeRoutes;
}
export default AuthRoute;
