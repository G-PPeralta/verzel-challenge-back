import { IsString, IsInt, IsDate } from 'class-validator';

export class CreateClassDto {
  @IsString()
  className: string;

  @IsDate()
  date: Date;

  @IsInt()
  moduleId: number;
}
