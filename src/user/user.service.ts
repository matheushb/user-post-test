import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new Error('user not found');
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userRepository.update(id, updateUserDto);
    if (!updateUserDto) throw new Error('User not updated');
    return updatedUser;
  }

  async remove(id: string) {
    const removedUser = await this.userRepository.remove(id);
    if (!removedUser) throw new Error('User not removed');
    return removedUser;
  }
}
