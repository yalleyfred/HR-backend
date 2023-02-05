import { CreateDepartmentDto } from '../dtos/department.dto';
import { DepartmentInt } from '../interfaces/department.interface';
import Departments from '../models/department.model';
declare class DepartmentService {
    department: typeof Departments;
    findAllDepartmentEmployees(deptId: number): Promise<DepartmentInt[]>;
    findAllDepartment(): Promise<DepartmentInt[]>;
    findDepartmentById(deptId: number): Promise<DepartmentInt>;
    createDepartment(departmentData: CreateDepartmentDto): Promise<DepartmentInt>;
    updateDepartment(deptId: number, departmentData: CreateDepartmentDto): Promise<void>;
    deleteDepartment(deptId: number): Promise<void>;
}
export default DepartmentService;
