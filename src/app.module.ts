import { Module } from '@nestjs/common';

import { UserModule } from './components/user/user.module';

@Module({
  // controllers: [AppController],
  // providers: [AppService],
  imports: [UserModule],
})
export class AppModule {}
