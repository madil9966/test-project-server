import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { userDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create-user')
  async addUser(@Body() userBody: userDto) {
    return await this.usersService.addUser(userBody);
  }

  @Get('/get-users')
  async getUsers(@Query('name') name?: string) {
    return await this.usersService.getUsers(name);
  }
}
