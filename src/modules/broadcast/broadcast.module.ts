import { Module } from '@nestjs/common';
import { BroadcastController } from './broadcast.controller';
import { BroadcastService } from './broadcast.service';
import { ChatService } from 'src/providers/chat/chat.service';

@Module({
    imports:[],
    controllers:[BroadcastController],
    providers:[BroadcastService,ChatService]
})

export class BroadcastModule {}