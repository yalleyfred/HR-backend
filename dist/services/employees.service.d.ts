import { CreateEmployeeDto } from '../dtos/users.dto';
import { EmployeeInt } from '../interfaces/student.interface';
import Employees from '../models/employees.model';
declare class EmployeeService {
    users: typeof Employees;
    findAllUser(): Promise<EmployeeInt[]>;
    findUserById(userId: number): Promise<EmployeeInt>;
    createUser(userData: CreateEmployeeDto): Promise<EmployeeInt>;
    updateUser(userId: number, userData: CreateEmployeeDto): Promise<EmployeeInt[]>;
    deleteUser(userId: number): Promise<EmployeeInt[]>;
}
export default EmployeeService;
