import { NextFunction, Response } from 'express';
import { RequestWithEmployee } from '../interfaces/auth.interface';
declare const authMiddleware: (req: RequestWithEmployee, res: Response, next: NextFunction) => Promise<void>;
export default authMiddleware;
