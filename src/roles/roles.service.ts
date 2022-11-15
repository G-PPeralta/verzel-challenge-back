import { Injectable } from '@nestjs/common';
import { prismaClient } from 'src/database/prismaClient';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  async create(createRoleDto: CreateRoleDto) {
    return await prismaClient.roles.create({ data: createRoleDto });
  }

  async findAll() {
    return await prismaClient.roles.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
