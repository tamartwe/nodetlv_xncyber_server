import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { ImagesController } from './images/images.controller';

@Module({
  imports: [],
  controllers: [LoginController, ImagesController],
  providers: [AppService, LoginService],
})
export class AppModule {}
