import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { IconController } from './icon/icon.controller';
import { IconService } from './icon/icon.service';

@Module({
  imports: [],
  controllers: [AppController, LoginController, IconController],
  providers: [AppService, LoginService, IconService],
})
export class AppModule {}
