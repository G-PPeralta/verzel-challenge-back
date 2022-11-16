import { Injectable } from '@nestjs/common';
import { prismaClient } from 'src/database/prismaClient';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassesService {
  async create(createClassDto: CreateClassDto) {
    return await prismaClient.classes.create({ data: createClassDto });
  }

  async findAll() {
    return await prismaClient.classes.findMany();
  }

  async findOne(id: number) {
    return await prismaClient.classes.findUnique({ where: { id } });
  }

  async update(id: number, updateClassDto: UpdateClassDto) {
    return await prismaClient.classes.update({
      where: {
        id: id,
      },
      data: {
        className: updateClassDto.className,
        date: updateClassDto.date,
      },
    });
  }

  async remove(id: number) {
    return await prismaClient.classes.delete({ where: { id } });
  }
}
