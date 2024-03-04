import { Injectable } from "@nestjs/common";
import { ChatService } from "src/providers/chat/chat.service";

@Injectable()
export class BroadcastService {
    constructor(
        private readonly chat: ChatService
    ) {}

    async sendMessage(body:any) {
         return await this.chat.sendMessage(body);
    }
}