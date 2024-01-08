import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async createToken() {
    // return this.jwtService.sign();
  }

  async checkToken(token: string) {
    // return this.jwtService.verify();
  }

  async login(email: string, senha: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
        senha,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }
    return user;
  }

  async forgetPassword(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('E-mail esta incorreto.');
    }
    // TO DO: enviar e-mail para o usuário
    return user;
  }
  async reset(senha: string, token: string) {
    // TO DO: validar token...
    const id = 0;
    await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        senha,
      },
    });
    return true;
  }
}
