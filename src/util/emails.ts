import {connect, ImapSimple, Message} from 'imap-simple';
export class Email {
    private async withinInbox<T>(callback:(imap: ImapSimple)=>Promise<T>): Promise<T>{
        const imap=await connect({
            imap:{
                user:'sri.venkat105@gmail.com',
                password: 'venkat',
                host:'imap.gmail.com',
                port: 993,
                tls:true,
                tlsOptions:{servername:'imap.gmail.com'},
                connTimeout:20000,
                authTimeout:20000,
            },
        });
        try{
            await imap.openBox('INBOX');
            return await callback(imap);
        }finally{
            imap.end();
        }
    }

}