import { NestFactory } from '@nestjs/core';
import { AppModule } from './config/app.module';

import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';
import { cookieOptions } from './utils/cookie';

async function bootstrap() {
  const PORT = 3000 || process.env.PORT;
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableCors({ origin: 'http://localhost:3000' });
  app.use(cookieParser());
  app.use(csurf({ cookie: { ...cookieOptions } }));

  await app.listen(PORT);
}

bootstrap();
