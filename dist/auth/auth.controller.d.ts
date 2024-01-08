import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthForgetDTO } from './dto/auth-forget.dto';
import { AuthResetDTO } from './dto/auth-reset.dto';
import { UserService } from '../user/user.service';
export declare class AuthController {
    private readonly userService;
    constructor(userService: UserService);
    login(body: AuthLoginDTO): Promise<void>;
    register(body: AuthRegisterDTO): Promise<{
        id: number;
        name: string;
        email: string;
        senha: string;
        createAt: Date;
        updateAt: Date;
        status: number;
    }>;
    forget(body: AuthForgetDTO): Promise<void>;
    reset(body: AuthResetDTO): Promise<void>;
}
