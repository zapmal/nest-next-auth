import { NestFactory } from '@nestjs/core';
import { AppModule } from './config/app.module';

import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const PORT = 3000 || process.env.PORT;
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.use(cookieParser());

  await app.listen(PORT);
}

bootstrap();
