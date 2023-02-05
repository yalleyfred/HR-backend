import { NextFunction, Request, Response } from "express";
import { RequestWithAdmin } from "../interfaces/auth.interface";
import AuthService from "../services/adminAut.service";
declare class AdminAuthController {
    authService: AuthService;
    getUsers: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    signUp: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    logIn: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    logOut: (req: RequestWithAdmin, res: Response, next: NextFunction) => Promise<void>;
}
export default AdminAuthController;
