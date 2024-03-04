import { ApiProperty } from "@nestjs/swagger";

export class SendChatDTO {
    @ApiProperty()
    phone: string;

    @ApiProperty()
    message: string;
}