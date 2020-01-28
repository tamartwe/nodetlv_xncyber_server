import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from './login.dto'
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post()
  async login(@Body() loginDto: LoginDto): Promise<object> {
    const res = await this.loginService.login(loginDto);
    return { 'res' : res};
  }
  
}
