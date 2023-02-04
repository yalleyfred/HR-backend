"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const adminAut_service_1 = tslib_1.__importDefault(require("../services/adminAut.service"));
class AdminAuthController {
    constructor() {
        this.authService = new adminAut_service_1.default();
        this.getUsers = async (req, res, next) => {
            try {
                const findAllUsersData = await this.authService.findAllUser();
                res.status(200).json({ data: findAllUsersData, message: "findAll" });
            }
            catch (error) {
                next(error);
            }
        };
        this.signUp = async (req, res, next) => {
            try {
                const userData = req.body;
                const signUpUserData = await this.authService.signup(userData);
                res.status(201).json({ data: signUpUserData, message: "signup" });
            }
            catch (error) {
                next(error);
            }
        };
        this.logIn = async (req, res, next) => {
            try {
                const userData = req.body;
                const { cookie, findUser } = await this.authService.login(userData);
                res.setHeader("Set-Cookie", [cookie]);
                res.status(200).json({ data: findUser, message: "login" });
            }
            catch (error) {
                next(error);
            }
        };
        this.logOut = async (req, res, next) => {
            try {
                const userData = req.user;
                const logOutUserData = await this.authService.logout(userData);
                res.setHeader("Set-Cookie", ["Authorization=; Max-age=0"]);
                res.status(200).json({ data: logOutUserData, message: "logout" });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = AdminAuthController;
//# sourceMappingURL=adminAuth.controller.js.map