// src/users/users.service.ts
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async registerUser(createUserDto: CreateUserDto) {
    const { first_name, phone } = createUserDto

    // Проверяем, есть ли уже пользователь с таким номером телефона
    const existingUser = await this.prisma.user.findUnique({
      where: { phone },
    })

    if (existingUser) {
      throw new Error('Пользователь с таким номером телефона уже существует')
    }

    // Создаем нового пользователя
    const user = await this.prisma.user.create({
      data: {
        first_name,
        phone,
      },
    })

    return user
  }

  async updateUser(userId: number, updateUserDto: UpdateUserDto) {
    const { first_name, last_name, middle_name, email, photoUrl } =
      updateUserDto

    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        first_name: first_name || undefined,
        last_name: last_name || undefined,
        middle_name: middle_name || undefined,
        email: email || undefined,
        photoUrl: photoUrl || undefined,
      },
    })

    return user
  }
}
