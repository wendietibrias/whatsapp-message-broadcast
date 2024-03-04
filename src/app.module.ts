import { Module } from '@nestjs/common';
import { BroadcastModule } from './modules/broadcast/broadcast.module';
import { ConfigModule } from '@nestjs/config';
import configs from './common/configs';

@Module({
  imports: [
    BroadcastModule,
    ConfigModule.forRoot({
       load:configs,
       isGlobal:true,
       envFilePath:'.env'
    })
],
  controllers: [],
  providers: [],
})
export class AppModule {}
