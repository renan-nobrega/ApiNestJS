import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from 'class-validator';
import { CreateUserDTO } from '../../user/dto/create-user.dto';

export class AuthRegisterDTO extends CreateUserDTO {}
