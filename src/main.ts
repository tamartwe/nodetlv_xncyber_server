import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initUsernamePassword } from './login/username-password-initializer';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await initUsernamePassword();
  await app.listen(80);
}
bootstrap();
