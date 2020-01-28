import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from './login.service';
import { LoginDto } from './login.dto';
import { expect } from 'chai';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginService],
    }).compile();

    service = module.get<LoginService>(LoginService);
  });

  it('return false on correct login and password', async () => {
    const dto: LoginDto = {
      'username' : 'tamar1',
      'password' : '1234'
    } 
    const serviceResult = await service.login(dto);
    expect(serviceResult).to.equal(false);
  });
});
