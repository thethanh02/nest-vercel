import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { NoteService } from './note/note.service';
import { NoteModule } from './note/note.module';

@Module({
  imports: [UserModule, AuthModule, PrismaModule, NoteModule],
  // controllers: [],
  // providers: [AuthService, NoteService],
})
export class AppModule {}
