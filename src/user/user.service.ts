import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { UpdatePacthUserDTO } from './dto/update-patch-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ email, name, senha }: CreateUserDTO) {
    return this.prisma.user.create({
      data: {
        email,
        name,
        senha,
        status: 1,
      },
    });
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({});
    return users;
  }

  async findOne(id: number): Promise<User | null> {
    try {
      if (Number.isNaN(id)) {
        throw new Error('Please provide a valid Id');
      }
      const user = await this.prisma.user.findUnique({
        where: {
          id: id,
        },
      });
      return user;
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  async update(
    id: number,
    _updateUserDto: UpdatePacthUserDTO,
  ): Promise<User | null> {
    try {
      if (Number.isNaN(id)) {
        throw new Error('Please provide a valid Id');
      }
      const user = await this.prisma.user.update({
        where: { id: id },
        data: _updateUserDto,
      });

      return user;
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: number): Promise<User | null> {
    try {
      if (Number.isNaN(id)) {
        throw new Error('Please provide a valid Id');
      }

      const user = await this.prisma.user.update({
        where: {
          id: id,
        },
        data: {
          status: 0,
        },
      });

      return user;
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }
}
