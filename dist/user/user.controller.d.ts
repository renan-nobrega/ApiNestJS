import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { UpdatePacthUserDTO } from './dto/update-patch-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
    findOne(id: string): Promise<User | null>;
    update(id: string, updateUserDto: UpdatePacthUserDTO): Promise<User | null>;
    remove(id: string): Promise<User | null>;
}
