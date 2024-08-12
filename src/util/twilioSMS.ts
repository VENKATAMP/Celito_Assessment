import { Twilio } from "twilio/lib";
import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";
class TwilioSMS {
    private accountSid = 'AVNHVHJGJG';
    private authToken = '5etgfhjgjhjkhkn8i8hjk';

    public async getLatestSMS(toNumber:string) {
        const client = new Twilio(this.accountSid, this.authToken);
        const exitTime=new Date().getTime()+3000;
        let messages:MessageInstance[]=[];
        do{
            messages=await client.messages.list({
                to: toNumber,
                limit: 1,
            });
        }while(new Date().getTime()<=exitTime);
        
        if(messages.length>=1){
            const message=messages[0].body;
            return message.match(/([0-9])\w+/g);
        }else{
            return '';
        }
    }
}

export default new Twilio();