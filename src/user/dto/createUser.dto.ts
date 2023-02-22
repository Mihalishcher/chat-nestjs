import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsAlphanumeric()
  @Length(8, 30)
  password: string;

  @IsString()
  @IsAlphanumeric()
  @Length(2, 15)
  username: string;
}
