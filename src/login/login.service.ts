import { Injectable } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { getUsernamePasswords } from './username-password-initializer';

@Injectable()
export class LoginService {

  async login(loginDto: LoginDto): Promise<number>{
    const existingUserPassword: Map<string, LoginDto> = getUsernamePasswords();
    const currentUser = existingUserPassword.get(loginDto.username);
    if (currentUser !== undefined && currentUser !== null && currentUser.password === loginDto.password) {
      return Math.round(Math.random() * 1000000);
    } else {
      return -1;
    }
  }
    
}
