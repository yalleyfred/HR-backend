"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const employees_service_1 = tslib_1.__importDefault(require("../services/employees.service"));
class EmployeeController {
    constructor() {
        this.employeeService = new employees_service_1.default();
        this.getEmployees = async (req, res, next) => {
            try {
                const findAllUsersData = await this.employeeService.findAllEmployees();
                res.status(200).json({ data: findAllUsersData, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
        this.getEmployeeById = async (req, res, next) => {
            try {
                const userId = Number(req.params.id);
                const findOneUserData = await this.employeeService.findEmployeeById(userId);
                res.status(200).json({ data: findOneUserData, message: 'findOne' });
            }
            catch (error) {
                next(error);
            }
        };
        this.createEmployee = async (req, res, next) => {
            try {
                const userData = req.body;
                // console.log(userData);
                const createUserData = await this.employeeService.createEmployee(userData);
                res.status(201).json({ data: createUserData, message: 'created' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateEmployee = async (req, res, next) => {
            try {
                const userId = Number(req.params.id);
                const userData = req.body;
                await this.employeeService.updateEmployee(userId, userData);
                res.status(200).json({ message: 'updated' });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteEmployee = async (req, res, next) => {
            try {
                const userId = Number(req.params.id);
                await this.employeeService.deleteEmployee(userId);
                res.status(200).json({ message: 'deleted' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = EmployeeController;
//# sourceMappingURL=employees.controller.js.map