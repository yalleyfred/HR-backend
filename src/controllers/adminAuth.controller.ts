import { NextFunction, Request, Response } from "express";
import { CreateUserDto, LoginUserDto } from "../dtos/users.dto";
import { RequestWithAdmin, RequestWithEmployee } from "../interfaces/auth.interface";
import { Admin } from "../interfaces/employees.interface.ts";
import AuthService from "../services/adminAut.service";

class AdminAuthController {
  public authService = new AuthService();

  public getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const findAllUsersData: Admin[] = await this.authService.findAllUser();

      res.status(200).json({ data: findAllUsersData, message: "findAll" });
    } catch (error) {
      next(error);
    }
  };

  public signUp = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userData: CreateUserDto = req.body;
      const signUpUserData: Admin = await this.authService.signup(userData);

      res.status(201).json({ data: signUpUserData, message: "signup" });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userData: LoginUserDto = req.body;

      const { cookie, findUser } = await this.authService.login(userData);

      res.setHeader("Set-Cookie", [cookie]);
      res.status(200).json({ data: findUser, message: "login" });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (
    req: RequestWithAdmin,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userData: Admin = req.user;
      const logOutUserData: Admin = await this.authService.logout(userData);

      res.setHeader("Set-Cookie", ["Authorization=; Max-age=0"]);
      res.status(200).json({ data: logOutUserData, message: "logout" });
    } catch (error) {
      next(error);
    }
  };
}

export default AdminAuthController;
