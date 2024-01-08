import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from 'class-validator';

export class AuthForgetDTO {
  @IsEmail()
  email: string;
}
