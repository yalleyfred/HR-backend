"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const employeeAuth_controller_1 = tslib_1.__importDefault(require("../controllers/employeeAuth.controller"));
const users_dto_1 = require("../dtos/users.dto");
const auth_middleware_1 = tslib_1.__importDefault(require("../middlewares/auth.middleware"));
const validation_middleware_1 = tslib_1.__importDefault(require("../middlewares/validation.middleware"));
class AuthRoute {
    constructor() {
        this.path = '/Employees/';
        this.router = (0, express_1.Router)();
        this.employeeAuthController = new employeeAuth_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // this.router.post(`${this.path}signup`, validationMiddleware(CreateStudentDto, 'body'), this.authController.signUp);
        this.router.post(`${this.path}login`, (0, validation_middleware_1.default)(users_dto_1.LoginUserDto, 'body'), this.employeeAuthController.logIn);
        this.router.post(`${this.path}logout`, auth_middleware_1.default, this.employeeAuthController.logOut);
    }
}
exports.default = AuthRoute;
//# sourceMappingURL=employee.route.js.map