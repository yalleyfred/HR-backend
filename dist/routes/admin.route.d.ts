import AuthController from '../controllers/adminAuth.controller';
import EmployeeController from '../controllers/employees.controller';
import { Routes } from '../interfaces/routes.interface';
declare class AdminAuthRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    authController: AuthController;
    employeeController: EmployeeController;
    constructor();
    private initializeRoutes;
}
export default AdminAuthRoute;
