"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = require("bcrypt");
const HttpException_1 = require("../exceptions/HttpException");
const employees_model_1 = tslib_1.__importDefault(require("../models/employees.model"));
const util_1 = require("../utils/util");
class EmployeeService {
    constructor() {
        this.employee = employees_model_1.default;
    }
    async findAllEmployees() {
        const users = await this.employee.findAll();
        return users;
    }
    async findEmployeeById(userId) {
        const findUser = await this.employee.findOne({ where: { id: userId } });
        if (!findUser)
            throw new HttpException_1.HttpException(409, "Employee doesn't exist");
        return findUser;
    }
    async createEmployee(userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, "EmployeeData is empty");
        const findUser = await this.employee.findOne({
            where: {
                email: userData.email,
            },
        });
        if (findUser)
            throw new HttpException_1.HttpException(409, `This email ${userData.email} already exists`);
        const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
        const createUserData = { first_name: userData.first_name, last_name: userData.last_name, email: userData.email, password: hashedPassword, gender: userData.gender, dob: userData.dob, nationality: userData.nationality, highest_qualifications: userData.highest_qualifications, phone: userData.phone, department: userData.department, snnit_no: userData.snnit_no, tin: userData.tin };
        await this.employee.create(createUserData);
        return createUserData;
    }
    async updateEmployee(userId, userData) {
        if ((0, util_1.isEmpty)(userData))
            throw new HttpException_1.HttpException(400, "EmployeeData is empty");
        const findUser = await this.employee.findOne({ where: { id: userId } });
        if (!findUser)
            throw new HttpException_1.HttpException(409, "Employee doesn't exist");
        // console.log(findUser);
        const hashedPassword = await (0, bcrypt_1.hash)(userData.password, 10);
        const updateUserData = await this.employee.update({ first_name: userData.first_name, last_name: userData.last_name, email: userData.email, password: hashedPassword, gender: userData.gender, dob: userData.dob, nationality: userData.nationality, highest_qualifications: userData.highest_qualifications, phone: userData.phone, department: userData.department, snnit_no: userData.snnit_no, tin: userData.tin }, {
            where: {
                id: userId
            }
        });
        return;
    }
    async deleteEmployee(userId) {
        const findUser = await this.employee.findOne({ where: { id: userId } });
        if (!findUser)
            throw new HttpException_1.HttpException(409, "Employee doesn't exist");
        await this.employee.destroy({
            where: {
                id: userId
            }
        });
        return;
    }
}
exports.default = EmployeeService;
//# sourceMappingURL=employees.service.js.map