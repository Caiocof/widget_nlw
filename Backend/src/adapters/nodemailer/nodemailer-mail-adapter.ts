import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "0a78f231cc7ba8",
        pass: "7823e4c6788a15"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedgeet <oi@feedget.com>',
            to: 'Caio César <caio.dev@caiocof.com>',
            subject,
            html: body
        })
    }
}