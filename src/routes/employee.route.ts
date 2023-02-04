import { Router } from 'express';
import EmployeeAuthController from '../controllers/employeeAuth.controller';
import { CreateEmployeeDto, LoginUserDto } from '../dtos/users.dto';
import { Routes } from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';

class AuthRoute implements Routes {
  public path = '/Employees/';
  public router = Router();
  public employeeAuthController = new EmployeeAuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}department`, authMiddleware, this.employeeAuthController.getAllEmployees);


    // this.router.post(`${this.path}signup`, validationMiddleware(CreateStudentDto, 'body'), this.authController.signUp);
    this.router.post(`${this.path}login`, validationMiddleware(LoginUserDto, 'body'), this.employeeAuthController.logIn);
    this.router.post(`${this.path}logout`, authMiddleware, this.employeeAuthController.logOut);
  }
}

export default AuthRoute;
