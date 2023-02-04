import { IsEmail, IsString } from 'class-validator';


export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public name: string;
}

export class CreateEmployeeDto  {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public first_name: string;

  @IsString()
  public last_name: string;

  @IsString()
  public gender: string;

  @IsString()
  public dob: string;

  @IsString()
  public nationality: string;

  @IsString()
  public highest_qualifications: string;

  @IsString()
  public phone: string;

  @IsString()
  public department: string;

  @IsString()
  public snnit_no: string;

  @IsString()
  public tin: string;

}

export class LoginUserDto  {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

}




