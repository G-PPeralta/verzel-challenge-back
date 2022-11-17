import { PartialType } from '@nestjs/mapped-types';
import { CreateClassDto } from './create-class.dto';
import { IsString, IsInt, IsDate } from 'class-validator';

export class UpdateClassDto extends PartialType(CreateClassDto) {
  @IsString()
  className: string;

  @IsDate()
  date: Date;

  @IsInt()
  moduleId: number;
}
