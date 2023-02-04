"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
let Department = class Department extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], Department.prototype, "id", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Department.prototype, "name", void 0);
Department = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "Department",
        timestamps: true
    })
], Department);
exports.default = Department;
//# sourceMappingURL=department.model.js.map