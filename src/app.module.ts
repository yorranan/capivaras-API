import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module'
import { CapybaraController } from './controllers/capybara.controller';
import { NoteController } from './controllers/note.controller';
import { HabitatController } from './controllers/habitat.cotroller';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), PrismaModule],
  controllers: [CapybaraController, NoteController, HabitatController],
})
export class AppModule {}
