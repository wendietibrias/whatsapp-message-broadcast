import qrcode from 'qrcode-terminal';
import { Client,GroupChat, LocalAuth } from 'whatsapp-web.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
    private client: Client;
    private group: any

    constructor() {
     this.client = new Client({
            authStrategy: new LocalAuth({
                clientId:"chrome"
            }),
            puppeteer: {
                headless:false,
            }
        });

        this.client.on('qr' , (qr)=>{
            qrcode.generate(qr,{ small:true });
        });
    
        this.client.on('ready' ,async () => {
            console.log('ready client');
        });

        this.client.on('message' , (msg) => {
           if(msg.from === "6282223924942@c.us") {
               msg.reply("Hallo");
           }
        })
    
        this.client.initialize();
    }

    async sendMessage(body:any) {
         const { message,phone } = body;

         const result = phone.split("").map((item:any ,idx:number)=>{
             if(idx == 0) {
                return "62";
             } else {
                return item;
             }
         }).join("");

         const send = await this.client.sendMessage(result+"@c.us" , message);
         return send;
    }
}