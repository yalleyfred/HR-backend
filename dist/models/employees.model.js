"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
;
let Employees = class Employees extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], Employees.prototype, "id", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Employees.prototype, "first_name", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Employees.prototype, "last_name", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Employees.prototype, "email", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Employees.prototype, "password", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Employees.prototype, "gender", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Employees.prototype, "dob", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Employees.prototype, "nationality", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Employees.prototype, "highest_qualifications", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Employees.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Employees.prototype, "department", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Employees.prototype, "snnit_no", void 0);
tslib_1.__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Employees.prototype, "tin", void 0);
Employees = tslib_1.__decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "Employees",
        timestamps: true
    })
], Employees);
exports.default = Employees;
// import { User } from '@interfaces/users.interface';
// import { Model, Sequelize, DataTypes } from 'sequelize';
// export default class StudentModel extends Model {
//   public id!: number;
//   public name!: string;
//   public email!: string;
//   public password!: string;
//   public passwordResetToken!: string;
//   public passwordResetExpires!: Date;
//   public active!: Boolean;
// }
// export const StudentMap = (sequelize: Sequelize) => {
//   StudentModel.init(
//     {
//       id: {
//         type: DataTypes.BIGINT,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       passwordResetExpires: {
//         type: DataTypes.DATE,
//         allowNull: true,
//       },
//       passwordResetToken: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//       active: {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false,
//       },
//     },
//     {
//       sequelize,
//       tableName: "Students",
//       timestamps: true,
//     }
//   );
//   StudentModel.sync();
// };
// password: password
// const userModel: User[] = [
//   { id: 1, email: 'example1@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
//   { id: 2, email: 'example2@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
//   { id: 3, email: 'example3@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
//   { id: 4, email: 'example4@email.com', password: '$2b$10$TBEfaCe1oo.2jfkBDWcj/usBj4oECsW2wOoDXpCa2IH9xqCpEK/hC' },
// ];
// export default userModel;
//# sourceMappingURL=employees.model.js.map