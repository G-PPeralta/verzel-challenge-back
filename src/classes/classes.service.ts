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

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
