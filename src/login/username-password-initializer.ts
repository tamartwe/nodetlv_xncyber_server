import { LoginDto } from './login.dto';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import * as path from 'path';

const usersPasswords = new Map<string, LoginDto>();

async function initUsernamePassword(): Promise<void> {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, '..', '..', 'resources', 'users_and_passwords.csv');
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        const username = row['username']; 
        const password = row['password'];
        const dto: LoginDto = {
          'username': username,
          'password': password
        };
        usersPasswords.set(username, dto);
      })
      .on('end', () => {
        return resolve();
      })
      .on('error', (err) => {
        return reject(err);
      });
  });
}

const getUsernamePasswords = (): Map<string, LoginDto> => {
  return usersPasswords;
}

export { getUsernamePasswords, initUsernamePassword }
