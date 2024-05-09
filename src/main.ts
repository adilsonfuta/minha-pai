import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const porta = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(porta);
}
bootstrap();
