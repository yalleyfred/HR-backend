"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const adminAuth_controller_1 = tslib_1.__importDefault(require("../controllers/adminAuth.controller"));
const employees_controller_1 = tslib_1.__importDefault(require("../controllers/employees.controller"));
const department_controller_1 = tslib_1.__importDefault(require("../controllers/department.controller"));
const users_dto_1 = require("../dtos/users.dto");
const department_dto_1 = require("../dtos/department.dto");
const adminAuth_middleware_1 = tslib_1.__importDefault(require("../middlewares/adminAuth.middleware"));
const validation_middleware_1 = tslib_1.__importDefault(require("../middlewares/validation.middleware"));
class AdminAuthRoute {
    constructor() {
        this.path = '/api/admin/';
        this.router = (0, express_1.Router)();
        this.authController = new adminAuth_controller_1.default();
        this.employeeController = new employees_controller_1.default();
        this.departmentController = new department_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}employees`, adminAuth_middleware_1.default, this.employeeController.getEmployees);
        this.router.get(`${this.path}employees/:id`, adminAuth_middleware_1.default, this.employeeController.getEmployeeById);
        this.router.post(`${this.path}employees`, (0, validation_middleware_1.default)(users_dto_1.CreateEmployeeDto, 'body'), adminAuth_middleware_1.default, this.employeeController.createEmployee);
        this.router.put(`${this.path}employees/:id`, (0, validation_middleware_1.default)(users_dto_1.CreateEmployeeDto, 'body', true), adminAuth_middleware_1.default, this.employeeController.updateEmployee);
        this.router.delete(`${this.path}employees/:id`, adminAuth_middleware_1.default, this.employeeController.deleteEmployee);
        this.router.get(`${this.path}departmentemployees/:id`, adminAuth_middleware_1.default, this.departmentController.findAllDepartmentEmployees);
        this.router.get(`${this.path}departments`, adminAuth_middleware_1.default, this.departmentController.getDepartments);
        this.router.get(`${this.path}departments/:id`, adminAuth_middleware_1.default, this.departmentController.getDepartmentById);
        this.router.post(`${this.path}departments`, (0, validation_middleware_1.default)(department_dto_1.CreateDepartmentDto, 'body'), adminAuth_middleware_1.default, this.departmentController.createDepartment);
        this.router.put(`${this.path}departments/:id`, (0, validation_middleware_1.default)(department_dto_1.CreateDepartmentDto, 'body', true), adminAuth_middleware_1.default, this.departmentController.updateDepartment);
        this.router.delete(`${this.path}departments/:id`, adminAuth_middleware_1.default, this.departmentController.deleteDepartment);
        this.router.get(`${this.path}`, this.authController.getUsers);
        this.router.post(`${this.path}signup`, (0, validation_middleware_1.default)(users_dto_1.CreateUserDto, 'body'), this.authController.signUp);
        this.router.post(`${this.path}login`, (0, validation_middleware_1.default)(users_dto_1.LoginUserDto, 'body'), this.authController.logIn);
        this.router.post(`${this.path}logout`, adminAuth_middleware_1.default, this.authController.logOut);
    }
}
exports.default = AdminAuthRoute;
//# sourceMappingURL=admin.route.js.map