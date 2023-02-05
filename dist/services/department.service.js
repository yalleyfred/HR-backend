"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("../exceptions/HttpException");
const department_model_1 = tslib_1.__importDefault(require("../models/department.model"));
const employees_model_1 = tslib_1.__importDefault(require("../models/employees.model"));
const util_1 = require("../utils/util");
class DepartmentService {
    constructor() {
        this.department = department_model_1.default;
    }
    async findAllDepartmentEmployees(deptId) {
        const department = await this.department.findAll({
            include: [{
                    model: employees_model_1.default,
                    as: 'employees'
                }],
            where: {
                id: deptId
            }
        });
        return department;
    }
    async findAllDepartment() {
        const departments = await this.department.findAll();
        return departments;
    }
    async findDepartmentById(deptId) {
        const findDepartment = await this.department.findOne({ where: { id: deptId } });
        if (!findDepartment)
            throw new HttpException_1.HttpException(409, "Department doesn't exist");
        return findDepartment;
    }
    async createDepartment(departmentData) {
        if ((0, util_1.isEmpty)(departmentData))
            throw new HttpException_1.HttpException(400, "DepartmentData is empty");
        const findUser = await this.department.findOne({
            where: {
                name: departmentData.name,
            },
        });
        if (findUser)
            throw new HttpException_1.HttpException(409, `This department ${departmentData.name} already exists`);
        const createDepartment = { name: departmentData.name };
        await this.department.create(createDepartment);
        return createDepartment;
    }
    async updateDepartment(deptId, departmentData) {
        if ((0, util_1.isEmpty)(departmentData))
            throw new HttpException_1.HttpException(400, "DepartmentData is empty");
        const findUser = await this.department.findOne({ where: { id: deptId } });
        if (!findUser)
            throw new HttpException_1.HttpException(409, "Department doesn't exist");
        const updatedepartmentData = await this.department.update({ name: departmentData.name }, {
            where: {
                id: deptId
            }
        });
        return;
    }
    async deleteDepartment(deptId) {
        const findUser = await this.department.findOne({ where: { id: deptId } });
        if (!findUser)
            throw new HttpException_1.HttpException(409, "Department doesn't exist");
        await this.department.destroy({
            where: {
                id: deptId
            }
        });
        return;
    }
}
exports.default = DepartmentService;
//# sourceMappingURL=department.service.js.map