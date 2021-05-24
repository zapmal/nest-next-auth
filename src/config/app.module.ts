import { Module } from '@nestjs/common';

import { UserModule } from '../components/user/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
