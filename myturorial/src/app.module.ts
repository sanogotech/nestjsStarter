import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorialsModule } from './tutorials/tutorials.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TutorialsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
