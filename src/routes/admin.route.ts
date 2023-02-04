import { Router } from 'express';
import AuthController from '../controllers/adminAuth.controller';
import EmployeeController from '../controllers/employees.controller';
import { CreateUserDto, LoginUserDto, CreateEmployeeDto } from '../dtos/users.dto';
import { Routes } from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';

class AdminAuthRoute implements Routes {
    public path = '/admin/';
    public router = Router();
    public authController = new AuthController();
    public employeeController = new EmployeeController();
  
    constructor() {
      this.initializeRoutes();
    }
  
    private initializeRoutes() {
      this.router.get(`${this.path}employees`, this.employeeController.getUsers);
      this.router.get(`${this.path}employees/:id(\\d+)`, this.employeeController.getUserById);
      this.router.post(`${this.path}employees`, validationMiddleware(CreateEmployeeDto, 'body'), this.employeeController.createUser);
      this.router.put(`${this.path}employees/:id(\\d+)`, validationMiddleware(CreateEmployeeDto, 'body', true), this.employeeController.updateUser);
      this.router.delete(`${this.path}employees/:id(\\d+)`, this.employeeController.deleteUser);


      this.router.get(`${this.path}`, this.authController.getUsers);
      this.router.post(`${this.path}signup`, validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
      this.router.post(`${this.path}login`, validationMiddleware(LoginUserDto, 'body'), this.authController.logIn);
      this.router.post(`${this.path}logout`, authMiddleware, this.authController.logOut);
    }
  }
  
  export default AdminAuthRoute;