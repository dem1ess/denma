// src/users/dto/update-user.dto.ts
import { IsEmail, IsOptional, IsString, IsUrl } from 'class-validator'

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  first_name?: string // Имя

  @IsOptional()
  @IsString()
  last_name?: string // Фамилия

  @IsOptional()
  @IsString()
  middle_name?: string // Отчество

  @IsOptional()
  @IsEmail()
  email?: string // Почта

  @IsOptional()
  @IsUrl()
  photoUrl?: string // Фото URL
}
