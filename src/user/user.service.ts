import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/createUser.dto';
import { EmailOrNameExist } from './exeptions/emailOrNameExist.exception';
import { UserNotFoundException } from './exeptions/notFound.exception';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async deleteAll() {
    return this.prismaService.user.deleteMany({});
  }

  async findAll() {
    return this.prismaService.user.findMany({});
  }

  async getUserByEmail(email: string) {
    const user = await this.prismaService.user.findFirst({ where: { email } });
    if (!user) {
      throw new UserNotFoundException(email);
    }
    return user;
  }

  async createUser(user: CreateUserDTO) {
    const checkUser = await this.prismaService.user.findFirst({
      where: { OR: [{ email: user.email }, { username: user.username }] },
    });
    if (checkUser && checkUser.email === user.email) {
      throw new EmailOrNameExist('email');
    } else if (checkUser) {
      throw new EmailOrNameExist('username');
    }
    return this.prismaService.user.create({ data: user });
  }
}
