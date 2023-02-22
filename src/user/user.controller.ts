import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
// import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Delete()
  async deleteAll() {
    return await this.userService.deleteAll();
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get()
  async getUserByEmail(@Body('email') email: string) {
    return await this.userService.getUserByEmail(email);
  }

  @Post()
  async createUser(@Body() user: CreateUserDTO) {
    return await this.userService.createUser(user);
  }
}
