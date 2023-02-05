import { Router } from 'express';
import AuthController from '../controllers/adminAuth.controller';
import EmployeeController from '../controllers/employees.controller';
import DepartmentController from '../controllers/department.controller';
import { CreateUserDto, LoginUserDto, CreateEmployeeDto } from '../dtos/users.dto';
import { CreateDepartmentDto} from '../dtos/department.dto';
import { Routes } from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/adminAuth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';

class AdminAuthRoute implements Routes {
    public path = '/api/admin/';
    public router = Router();
    public authController = new AuthController();
    public employeeController = new EmployeeController();
    public departmentController = new DepartmentController();
  
    constructor() {
      this.initializeRoutes();
    }
  
    private initializeRoutes() {
      this.router.get(`${this.path}employees`, authMiddleware, this.employeeController.getEmployees);
      this.router.get(`${this.path}employees/:id`, authMiddleware, this.employeeController.getEmployeeById);
      this.router.post(`${this.path}employees`, validationMiddleware(CreateEmployeeDto, 'body'), authMiddleware, this.employeeController.createEmployee);
      this.router.put(`${this.path}employees/:id`, validationMiddleware(CreateEmployeeDto, 'body', true), authMiddleware, this.employeeController.updateEmployee);
      this.router.delete(`${this.path}employees/:id`, authMiddleware, this.employeeController.deleteEmployee);


      this.router.get(`${this.path}departmentemployees/:id`, authMiddleware, this.departmentController.findAllDepartmentEmployees);
      this.router.get(`${this.path}departments`, authMiddleware, this.departmentController.getDepartments);
      this.router.get(`${this.path}departments/:id`, authMiddleware, this.departmentController.getDepartmentById);
      this.router.post(`${this.path}departments`, validationMiddleware(CreateDepartmentDto, 'body'), authMiddleware, this.departmentController.createDepartment);
      this.router.put(`${this.path}departments/:id`, validationMiddleware(CreateDepartmentDto, 'body', true), authMiddleware, this.departmentController.updateDepartment);
      this.router.delete(`${this.path}departments/:id`, authMiddleware, this.departmentController.deleteDepartment);


      this.router.get(`${this.path}`, this.authController.getUsers);
      this.router.post(`${this.path}signup`, validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
      this.router.post(`${this.path}login`, validationMiddleware(LoginUserDto, 'body'), this.authController.logIn);
      this.router.post(`${this.path}logout`, authMiddleware, this.authController.logOut);
    }
  }
  
  export default AdminAuthRoute;