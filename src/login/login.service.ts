import { Injectable } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { getUsernamePasswords } from './username-password-initializer';

@Injectable()
export class LoginService {

  async login(loginDto: LoginDto): Promise<boolean>{
    const existingUserPassword: Map<string, LoginDto> = getUsernamePasswords();
    const currentUser = existingUserPassword.get(loginDto.username);
    return currentUser !== null && currentUser.password === loginDto.password; 
  }
    
}
