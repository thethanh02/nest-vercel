import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { NoteService } from './note/note.service';
import { NoteModule } from './note/note.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UserModule, AuthModule, PrismaModule, NoteModule],
  controllers: [AppController],
  providers: [AppService],
  // controllers: [],
  // providers: [AuthService, NoteService],
})
export class AppModule {}
