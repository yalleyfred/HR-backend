"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const department_service_1 = tslib_1.__importDefault(require("../services/department.service"));
class DepartmentController {
    constructor() {
        this.departmentService = new department_service_1.default();
        this.getDepartments = async (req, res, next) => {
            try {
                const findAllDepartmentData = await this.departmentService.findAllDepartment();
                res.status(200).json({ data: findAllDepartmentData, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getDepartmentById = async (req, res, next) => {
            try {
                const deptId = Number(req.params.id);
                const findOneDepartmentData = await this.departmentService.findDepartmentById(deptId);
                res.status(200).json({ data: findOneDepartmentData, message: 'findOne' });
            }
            catch (error) {
                next(error);
            }
        };
        this.createDepartment = async (req, res, next) => {
            try {
                const DepartmentData = req.body;
                const createDepartmentData = await this.departmentService.createDepartment(DepartmentData);
                res.status(201).json({ data: createDepartmentData, message: 'created' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateDepartment = async (req, res, next) => {
            try {
                const deptId = Number(req.params.id);
                const userData = req.body;
                await this.departmentService.updateDepartment(deptId, userData);
                res.status(200).json({ message: 'updated' });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteDepartment = async (req, res, next) => {
            try {
                const deptId = Number(req.params.id);
                await this.departmentService.deleteDepartment(deptId);
                res.status(200).json({ message: 'deleted' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = DepartmentController;
//# sourceMappingURL=department.controller.js.map