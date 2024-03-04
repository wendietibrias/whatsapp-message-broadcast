import { Controller,InternalServerErrorException,Post,Body } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ChatService } from "src/providers/chat/chat.service";
import { SendChatDTO } from "./dto/send-chat.dto";

@ApiTags('Whatsapp - Broadcast')
@Controller('chat')
export class BroadcastController {
    constructor(
        private readonly chatService: ChatService
    ){}

    @Post('send')
    async sendMessage(@Body() body: SendChatDTO) {
        try {
          return await this.chatService.sendMessage(body);
        } catch(err) {
             throw new InternalServerErrorException(err.message);
        }
    }
}