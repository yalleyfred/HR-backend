import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '../config';
import { HttpException } from '../exceptions/HttpException';
import { DataStoredInToken, RequestWithAdmin, RequestWithEmployee } from '../interfaces/auth.interface';
import Employee from '../models/employees.model';


const authMiddleware = async (req: RequestWithEmployee, res: Response, next: NextFunction) => {
  try {
    const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);
    
    if (Authorization) {
      const secretKey: string = SECRET_KEY;
      const verificationResponse = (await verify(Authorization, secretKey)) as DataStoredInToken;
      const userId = verificationResponse.id;
      const findEmployee = await Employee.findOne({
        where: {
          id: userId
        }
      });
    
      
      if (findEmployee) {
        req.user = findEmployee;
        next();
      } else {
        next(new HttpException(401, 'Wrong authentication token'));
      }
    } else {
      next(new HttpException(404, 'Authentication token missing'));
    }
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export default authMiddleware;
