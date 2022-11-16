import { Injectable } from '@nestjs/common';
import { prismaClient } from 'src/database/prismaClient';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';

@Injectable()
export class ModulesService {
  async create(createModuleDto: CreateModuleDto) {
    return await prismaClient.modules.create({ data: createModuleDto });
  }

  async findAll() {
    return await prismaClient.modules.findMany();
  }

  async findOne(id: number) {
    return await prismaClient.modules.findUnique({ where: { id } });
  }

  async update(id: number, updateModuleDto: UpdateModuleDto) {
    return await prismaClient.modules.update({
      where: {
        id: id,
      },
      data: {
        moduleName: updateModuleDto.moduleName,
      },
    });
  }

  async remove(id: number) {
    return await prismaClient.modules.delete({ where: { id } });
  }
}
