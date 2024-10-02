import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module'
import { CapybaraController } from './controllers/capybara.controller';
import { NoteController } from './controllers/note.controller';
import { HabitatController } from './controllers/habitat.cotroller';
import { NoteService, CapybaraService, HabitatService } from './services';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), 
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public')
  }),
  PrismaModule],
  providers: [CapybaraService, NoteService, HabitatService],
  controllers: [CapybaraController, NoteController, HabitatController],
})
export class AppModule {}
