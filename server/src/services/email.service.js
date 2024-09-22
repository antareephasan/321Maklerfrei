const nodemailer = require('nodemailer');
const pug = require('pug');
const config = require('../config/config');
const htmltotext = require('html-to-text');
const sesTransport = require('nodemailer-ses-transport');
module.exports = class Email {
    constructor(user) {
        this.to = user.email;
        this.name = user.name;
        this.from = config.email.from;
        this.host = 'http://123provisionsfrei.de';
        this.userId = user.userId;
    }
    createNewTransport() {
        return nodemailer.createTransport(sesTransport({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: 'eu-central-1'
        }));
    }
    //send email
    async send(template, subject, url, data, plainText) {
        if(plainText){
            const mailOptions = {
                from: this.from,
                to: this.to,
                subject,
                html:plainText,
                text: htmltotext.fromString(plainText)
            };
            return await this.createNewTransport().sendMail(mailOptions);
        }
        //1) render pug
        const html = pug.renderFile(`${__dirname}/../templates/emails/${template}.pug`, {
            name: this.name,
            subject,
            url,
            data,
            host: this.host,
            userId: this.userId
        });
        //2) define email oprions
        const mailOptions = {
            from: this.from,
            to: this.to,
            subject,
            html,
            text: htmltotext.fromString(html)
        };
        //3)create a transport and send email
        await this.createNewTransport().sendMail(mailOptions);
    }
    async sendEmailVerificationEmail(token) {
        const verifyEmailUrl = `${config.clientURL}/verify-email?token=${token}`;
        await this.send('verify_email',
            'E-Mail bestätigen',
            verifyEmailUrl
        );
    }
    async createFirstList() {
        await this.send('create_first_list',
            'Erste Anzeige erstellen'
        );
    }
    async sendMessageToOwner(plainText) {
        await this.send(null,
            'Neue Anfrage für Ihre Immobilie', null, null, plainText
        );
    }
    async listInactive(uniqId) {
        await this.send('list_inactive',
            'Inaktive Anzeige - 123provisionsfrei',
            false,
            uniqId
        );
    }
    async sendResetPasswordEmail(token) {
        const resetPasswordUrl = `${config.clientURL}/auth/reset-password?token=${token}`;
        await this.send('reset_password',
            'Passwort zurücksetzen',
            resetPasswordUrl
        );
    }
    async EmailMePremium(data, type) {
        let subject = (()=>{
            let value;
            switch (type) {
                case 'valuation':
                    value = 'New Valuation!';
                    break;
                case 'energy':
                    value = 'New Energy!';
                    break;
                default:
                    value = 'New Premium Subscription!';
                    break;
            }
            return value;
        })();
        await this.send('email_me_premium',
            subject,
            false,
            data
        );
    }
    async ListingActivated(listingId) {
        await this.send('listen_activated',
            `Anzeige aktiviert ${listingId}`, false, listingId
        );
    }
    async PaymentFailed(listingId) {
        await this.send('payment_failed',
            `Zahlung fehlgeschlagen ${listingId}`, false, listingId
        );
    }
    async SubscriptionExpired(listingId) {
        await this.send('subscription_expired',
            `Abo abgelaufen ${listingId}`, false, listingId
        );
    }
}