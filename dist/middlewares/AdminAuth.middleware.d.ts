import { NextFunction, Response } from 'express';
import { RequestWithAdmin } from '../interfaces/auth.interface';
declare const authMiddleware: (req: RequestWithAdmin, res: Response, next: NextFunction) => Promise<void>;
export default authMiddleware;
