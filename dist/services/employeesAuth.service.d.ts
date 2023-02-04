import { LoginUserDto } from '../dtos/users.dto';
import { TokenData } from '../interfaces/auth.interface';
import { EmployeeInt } from '../interfaces/student.interface';
import Employees from '../models/employees.model';
declare class EmployeesAuthService {
    employee: typeof Employees;
    login(userData: LoginUserDto): Promise<{
        cookie: string;
        findUser: EmployeeInt;
    }>;
    logout(userData: EmployeeInt): Promise<EmployeeInt>;
    createToken(user: {
        id: number;
    }): TokenData;
    createCookie(tokenData: TokenData): string;
}
export default EmployeesAuthService;
