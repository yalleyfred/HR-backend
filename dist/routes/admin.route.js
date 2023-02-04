"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const adminAuth_controller_1 = tslib_1.__importDefault(require("../controllers/adminAuth.controller"));
const employees_controller_1 = tslib_1.__importDefault(require("../controllers/employees.controller"));
const users_dto_1 = require("../dtos/users.dto");
const auth_middleware_1 = tslib_1.__importDefault(require("../middlewares/auth.middleware"));
const validation_middleware_1 = tslib_1.__importDefault(require("../middlewares/validation.middleware"));
class AdminAuthRoute {
    constructor() {
        this.path = '/admin/';
        this.router = (0, express_1.Router)();
        this.authController = new adminAuth_controller_1.default();
        this.employeeController = new employees_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}employees`, this.employeeController.getUsers);
        this.router.get(`${this.path}employees/:id(\\d+)`, this.employeeController.getUserById);
        this.router.post(`${this.path}employees`, (0, validation_middleware_1.default)(users_dto_1.CreateEmployeeDto, 'body'), this.employeeController.createUser);
        this.router.put(`${this.path}employees/:id(\\d+)`, (0, validation_middleware_1.default)(users_dto_1.CreateEmployeeDto, 'body', true), this.employeeController.updateUser);
        this.router.delete(`${this.path}employees/:id(\\d+)`, this.employeeController.deleteUser);
        this.router.get(`${this.path}`, this.authController.getUsers);
        this.router.post(`${this.path}signup`, (0, validation_middleware_1.default)(users_dto_1.CreateUserDto, 'body'), this.authController.signUp);
        this.router.post(`${this.path}login`, (0, validation_middleware_1.default)(users_dto_1.LoginUserDto, 'body'), this.authController.logIn);
        this.router.post(`${this.path}logout`, auth_middleware_1.default, this.authController.logOut);
    }
}
exports.default = AdminAuthRoute;
//# sourceMappingURL=admin.route.js.map