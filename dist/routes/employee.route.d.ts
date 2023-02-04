import EmployeeAuthController from '../controllers/employeeAuth.controller';
import { Routes } from '../interfaces/routes.interface';
declare class AuthRoute implements Routes {
    path: string;
    router: import("express-serve-static-core").Router;
    employeeAuthController: EmployeeAuthController;
    constructor();
    private initializeRoutes;
}
export default AuthRoute;
