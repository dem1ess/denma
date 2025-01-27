// src/app.module.ts
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module' // Импортируем PrismaModule
import { UsersModule } from './users/users.module'

@Module({
  imports: [UsersModule, PrismaModule], // Теперь PrismaModule доступен во всех модулях
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
