import { Injectable } from '@nestjs/common';

import * as fs from 'fs'
import * as csv from 'csv-parser'
import * as path from 'path'
import { LoginDto } from './login.dto';

@Injectable()
export class LoginService {

  async getUsernamesAndPasswordList(): Promise<Array<LoginDto>> {
    const usersPasswords = new Array<LoginDto>();
    return new Promise((resolve, reject) => {
      const filePath = path.join(__dirname,'..', '..', 'users_and_passwords.csv')
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          const dto: LoginDto = {
            'username' : row['username'],
            'password' : row['password']
          } 
          usersPasswords.push(dto)
        })   
        .on('end', () => {
          return resolve(usersPasswords);
        })
        .on('error', (err) => {
          return reject(err);
        });
    });
  }

  async login(loginDto: LoginDto): Promise<boolean>{
    const existingUserPassword: Array<LoginDto> = await this.getUsernamesAndPasswordList();
    const currentUser = existingUserPassword.filter(dto => dto.username === loginDto.username && dto.password === loginDto.password);
    return currentUser !== null && currentUser.length === 1; 
  }
    
}
