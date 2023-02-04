"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDepartmentDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateDepartmentDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateDepartmentDto.prototype, "name", void 0);
exports.CreateDepartmentDto = CreateDepartmentDto;
//# sourceMappingURL=department.dto.js.map