// src/users/dto/create-user.dto.ts
import { IsPhoneNumber, IsString } from 'class-validator'

export class CreateUserDto {
  @IsString()
  first_name: string

  @IsPhoneNumber()
  phone: string
}
