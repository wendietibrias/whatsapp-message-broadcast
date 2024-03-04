import { Controller,InternalServerErrorException,Post,Body } from "@nestjs/common";
import { ChatService } from "src/providers/chat/chat.service";

@Controller('chat')

export class BroadcastController {
    constructor(
        private readonly chatService: ChatService
    ){}

    @Post('send')
    async sendMessage(@Body() body: any) {
        try {
          const { message } = body;

          return await this.chatService.sendMessage(body);

        } catch(err) {
             throw new InternalServerErrorException(err.message);
        }
    }
}