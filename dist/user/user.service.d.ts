import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { UpdatePacthUserDTO } from './dto/update-patch-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create({ email, name, senha }: CreateUserDTO): Promise<{
        id: number;
        name: string;
        email: string;
        senha: string;
        createAt: Date;
        updateAt: Date;
        status: number;
    }>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    update(id: number, _updateUserDto: UpdatePacthUserDTO): Promise<User | null>;
    remove(id: number): Promise<User | null>;
}
