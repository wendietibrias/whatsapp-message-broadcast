import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Client, LocalAuth, NoAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
