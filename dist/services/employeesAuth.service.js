"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../config");
const HttpException_1 = require("../exceptions/HttpException");
const employees_model_1 = tslib_1.__importDefault(require("../models/employees.model"));
const util_1 = require("../utils/util");
class EmployeesAuthService {
    constructor() {
        this.employee = employees_model_1.default;
    }
    //   public async signup(userData: CreateEmployeeDto): Promise<EmployeeInt> {
    // ;
    //     if (isEmpty(userData)) throw new HttpException(400, "userData is empty");
    //     const findUser: EmployeeInt = await this.employee.findOne({
    //       where: {
    //         email: userData.email,
    //       },
    //     });
    //     if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);
    //     const hashedPassword = await hash(userData.password, 10);
    //     const createUserData: {
    //   first_name: string;
    //   last_name: string;
    //   email: string;
    //   password: string;
    //   gender: string;
    //   dob: string;
    //   nationality: string;
    //   highest_qualifications: string;
    //   phone: string;
    //   city: string;
    //   sponsor_name: string;
    //   sponsor_email: string;
    //   sponsor_phone: string;
    // }= { first_name: userData.first_name, last_name: userData.last_name, email: userData.email, password: hashedPassword, gender: userData.gender, dob: userData.dob, nationality: userData.nationality, highest_qualifications: userData.highest_qualifications, phone: userData.phone, city: userData.city, sponsor_name: userData.sponsor_name, sponsor_email: userData.sponsor_email, sponsor_phone: userData.sponsor_phone };
    //     await this.employee.create(createUserData)
    //     return createUserData;
    //   }
    async login(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, "EmployeeData is empty");
        const findUser = await this.employee.findOne({
            where: {
                email: userData.email,
            },
        });
        if (!findUser)
            throw new HttpException_1.HttpException(409, `This email ${userData.email} was not found`);
        const isPasswordMatching = await (0, bcrypt_1.compare)(userData.password, findUser.password);
        if (!isPasswordMatching)
            throw new HttpException_1.HttpException(409, "You're password not matching");
        const tokenData = this.createToken(findUser);
        const cookie = this.createCookie(tokenData);
        return { cookie, findUser };
    }
    async logout(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, "EmployeeData is empty");
        const findUser = await this.employee.findOne({
            where: {
                email: userData.email,
                password: userData.password
            },
        });
        if (!findUser)
            throw new HttpException_1.HttpException(409, "Employee doesn't exist");
        return findUser;
    }
    createToken(user) {
        const dataStoredInToken = { id: user.id };
        const secretKey = config_1.SECRET_KEY;
        const expiresIn = 60 * 60;
        return { expiresIn, token: (0, jsonwebtoken_1.sign)(dataStoredInToken, secretKey, { expiresIn }) };
    }
    createCookie(tokenData) {
        return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
    }
    async getAllEmployee() {
        const AllEmployee = await this.employee.findAll();
        return AllEmployee;
    }
}
exports.default = EmployeesAuthService;
//# sourceMappingURL=employeesAuth.service.js.map