import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class EventDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @MinLength(5)
  @MaxLength(255)
  description: string;

  @IsString()
  @IsNotEmpty()
  date: string;
}

