
import { CreateDepartmentDto } from '../dtos/department.dto';
import { HttpException } from '../exceptions/HttpException';
import { DepartmentInt } from '../interfaces/department.interface';
import Departments from '../models/department.model';
import { isEmpty } from '../utils/util';

class DepartmentService {
    public department = Departments;

    public async findAllDepartment(): Promise<DepartmentInt[]> {

        const departments: DepartmentInt[] = await this.department.findAll();
        return departments;
      }

      public async findDepartmentById(deptId: number): Promise<DepartmentInt> {

        const findDepartment: DepartmentInt = await this.department.findOne({where:{id: deptId}});
        if (!findDepartment) throw new HttpException(409, "Department doesn't exist");
        
        return findDepartment;
      }

      public async createDepartment(departmentData: CreateDepartmentDto): Promise<DepartmentInt> {

        if (isEmpty(departmentData)) throw new HttpException(400, "DepartmentData is empty");
    
        const findUser: DepartmentInt = await this.department.findOne({
          where: {
            name: departmentData.name,
          },
        });
        
        if (findUser) throw new HttpException(409, `This department ${departmentData.name} already exists`);
    
        const createDepartment: {name: string}= { name: departmentData.name};
        await this.department.create(createDepartment)
        return createDepartment;
      }

      public async updateDepartment(deptId: number, departmentData: CreateDepartmentDto): Promise<void> {

        if (isEmpty(departmentData)) throw new HttpException(400, "DepartmentData is empty");
    
        const findUser: DepartmentInt = await this.department.findOne({where:{id: deptId}});
        if (!findUser) throw new HttpException(409, "Department doesn't exist");
        
        const updatedepartmentData = await this.department.update({ name: departmentData.name }, {
          where: {
            id: deptId
          }
        });
    
        
        return;
      }

      public async deleteDepartment(deptId: number): Promise<void> {

        const findUser: DepartmentInt = await this.department.findOne({where:{id: deptId}});
        if (!findUser) throw new HttpException(409, "Department doesn't exist");
    
    
           await this.department.destroy({
          where: {
            id: deptId
          }
        });
    
        return
      }
}

export default DepartmentService;
