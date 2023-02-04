"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
// import {  User } from '../interfaces/admin.interface';
const employeesAuth_service_1 = tslib_1.__importDefault(require("../services/employeesAuth.service"));
class EmployeeAuthController {
    constructor() {
        this.employeeAuthService = new employeesAuth_service_1.default();
        // public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        //   try {
        //     const userData: CreateUserDto = req.body;
        //     const signUpUserData: User = await this.employeeAuthService.signup(userData);
        //     res.status(201).json({ data: signUpUserData, message: 'signup' });
        //   } catch (error) {
        //     next(error);
        //   }
        // };
        this.logIn = async (req, res, next) => {
            try {
                const userData = req.body;
                const { cookie, findUser } = await this.employeeAuthService.login(userData);
                res.setHeader('Set-Cookie', [cookie]);
                res.status(200).json({ data: findUser, message: 'login' });
            }
            catch (error) {
                next(error);
            }
        };
        this.logOut = async (req, res, next) => {
            try {
                const userData = req.user;
                const logOutUserData = await this.employeeAuthService.logout(userData);
                res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
                res.status(200).json({ data: logOutUserData, message: 'logout' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = EmployeeAuthController;
//# sourceMappingURL=employeeAuth.controller.js.map