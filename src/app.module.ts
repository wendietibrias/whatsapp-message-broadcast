import { Module } from '@nestjs/common';
import { BroadcastModule } from './modules/broadcast/broadcast.module';

@Module({
  imports: [BroadcastModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
