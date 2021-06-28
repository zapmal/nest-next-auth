import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';
import { cookieOptions } from './utils/cookie';

async function bootstrap() {
  const PORT = 4000 || process.env.PORT;
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableCors({ origin: 'http://localhost:3000', credentials: true });
  app.use(cookieParser());
  app.use(csurf({ cookie: { ...cookieOptions } }));

  await app.listen(PORT);
}

bootstrap();
