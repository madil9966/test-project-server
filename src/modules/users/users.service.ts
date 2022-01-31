import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDto as userBody } from './dto/user.dto';
import { IUser } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

  async addUser(body: userBody) {
    try {
      const { email } = body;
      const existingUser: any = await this.userModel.findOne({ email });

      if (existingUser) {
        throw new BadRequestException('User already exists');
      }

      return await this.userModel.create(body);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getUsers(key: string) {
    if (!key) {
      return await this.userModel.find();
    } else {
      return await this.userModel.find({
        name: { $regex: key, $options: 'i' },
      });
    }
  }
}
