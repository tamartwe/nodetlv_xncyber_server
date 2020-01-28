import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { expect } from 'chai';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST) login, incorrect password', async () => {
    const response =  await request(app.getHttpServer())
      .post('/login')
      .send({'username': 'tamar1', 'password': '1234'}).expect(201);
    expect(response.body.res).to.equal(false);
  });
});
