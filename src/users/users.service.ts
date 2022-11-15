import { Injectable } from '@nestjs/common';
import { prismaClient } from 'src/database/prismaClient';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    return prismaClient.user.create({ data: createUserDto });
  }

  async findAll() {
    return prismaClient.user.findMany();
  }

  async findOne(id: number) {
    return prismaClient.user.findUnique({ where: { id } });
  }

  async findOneByUsername(username: string) {
    return prismaClient.user.findUnique({ where: { username } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
