import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    createToken(): Promise<void>;
    checkToken(token: string): Promise<void>;
    login(email: string, senha: string): Promise<{
        id: number;
        name: string;
        email: string;
        senha: string;
        createAt: Date;
        updateAt: Date;
        status: number;
    }>;
    forgetPassword(email: string): Promise<{
        id: number;
        name: string;
        email: string;
        senha: string;
        createAt: Date;
        updateAt: Date;
        status: number;
    }>;
    reset(senha: string, token: string): Promise<boolean>;
}
