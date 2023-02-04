import { NextFunction, Response } from 'express';
import { RequestWithUser, RequestWithEmployee } from '../interfaces/auth.interface';
declare const authMiddleware: (req: RequestWithUser | RequestWithEmployee, res: Response, next: NextFunction) => Promise<void>;
export default authMiddleware;
