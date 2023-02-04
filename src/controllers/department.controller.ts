import { NextFunction, Request, Response } from 'express';
import { CreateDepartmentDto } from '../dtos/department.dto';
import {DepartmentInt } from '../interfaces/department.interface';
import DepartmentService from '../services/department.service';


class DepartmentController {
    public departmentService = new DepartmentService();

    public getDepartments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const findAllDepartmentData: DepartmentInt[] = await this.departmentService.findAllDepartment();
        
          
          res.status(200).json({ data: findAllDepartmentData, message: 'findAll' });
        } catch (error) {
          next(error);
        }
      };

      public getDepartmentById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const deptId = Number(req.params.id);
          const findOneDepartmentData: DepartmentInt = await this.departmentService.findDepartmentById(deptId);
    
          res.status(200).json({ data: findOneDepartmentData, message: 'findOne' });
        } catch (error) {
          next(error);
        }
      };

      public createDepartment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const DepartmentData: CreateDepartmentDto = req.body;
          const createDepartmentData: DepartmentInt = await this.departmentService.createDepartment(DepartmentData);
    
          res.status(201).json({ data: createDepartmentData, message: 'created' });
        } catch (error) {
          next(error);
        }
      };

      public updateDepartment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const deptId = Number(req.params.id);
          const userData: CreateDepartmentDto = req.body;
           await this.departmentService.updateDepartment(deptId, userData);
    
          res.status(200).json({ message: 'updated' });
        } catch (error) {
          next(error);
        }
      };

      public deleteDepartment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const deptId = Number(req.params.id);
           await this.departmentService.deleteDepartment(deptId);
    
          res.status(200).json({  message: 'deleted' });
        } catch (error) {
          next(error);
        }
      };
}

export default DepartmentController;
