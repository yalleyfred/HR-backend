import { NextFunction, Response } from 'express';
import { RequestWithAdmin, RequestWithEmployee } from '../interfaces/auth.interface';
declare const authMiddleware: (req: RequestWithAdmin | RequestWithEmployee, res: Response, next: NextFunction) => Promise<void>;
export default authMiddleware;
