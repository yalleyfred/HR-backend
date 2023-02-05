import { CreateEmployeeDto } from '../dtos/users.dto';
import { EmployeeInt } from '../interfaces/employees.interface.ts';
import Employees from '../models/employees.model';
import Department from '../models/department.model';
declare class EmployeeService {
    employee: typeof Employees;
    department: typeof Department;
    findAllEmployees(): Promise<EmployeeInt[]>;
    findEmployeeById(userId: number): Promise<EmployeeInt>;
    createEmployee(userData: CreateEmployeeDto): Promise<EmployeeInt>;
    updateEmployee(userId: number, userData: CreateEmployeeDto): Promise<void>;
    deleteEmployee(userId: number): Promise<void>;
}
export default EmployeeService;
