import { IsEmail, IsString } from 'class-validator';


export class CreateDepartmentDto {
    @IsString()
    public name: string;
  
  }