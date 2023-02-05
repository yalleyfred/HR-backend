import { Router } from 'express';
import EmployeeAuthController from '../controllers/employeeAuth.controller';
import DepartmentController from '../controllers/department.controller';
import { CreateEmployeeDto, LoginUserDto } from '../dtos/users.dto';
import { Routes } from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/employeeAuth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';

class AuthRoute implements Routes {
  public path = '/api/employees/';
  public router = Router();
  public employeeAuthController = new EmployeeAuthController();
  public departmentController = new DepartmentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}departmentemployees/:id`, authMiddleware, this.departmentController.findAllDepartmentEmployees);


    this.router.post(`${this.path}login`, validationMiddleware(LoginUserDto, 'body'), this.employeeAuthController.logIn);
    this.router.post(`${this.path}logout`, authMiddleware, this.employeeAuthController.logOut);
  }
}

export default AuthRoute;
