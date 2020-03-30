const Alerta = require('../model/Alerta');
const Afetado = require('../model/Afetado');
const Area = require('../model/Area');
const mailConfig = require('../config/mail-config');
require("dotenv-safe").config();

module.exports = {
    async notifica(request, response) {
        try {
            const area =  await Area.findOne({
                _id : request.body.area_id
             });

            const afetados = await Afetado.find({'area': area});
            const sgMail = require('@sendgrid/mail');
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            const de = mailConfig.de;
            const assunto = mailConfig.assunto;
            const texto = mailConfig.texto;
            const html = mailConfig.texto;

            afetados.forEach(afetado => {
                let para = afetado.email
                let msg = {
                    to: para,
                    from: de,
                    subject: assunto,
                    text: texto,
                    html: html,
                };
                sgMail.send(msg);
                const data = {de, para, assunto, texto, html, status: "enviado"}
                this.store(data)
            });
            return response.json(afetados)
        } catch (err) {
            throw new Error(err);
        }
    },

    async store(data) {
        let {de, para, assunto, texto, html, status} = data;

        alerta = await Alerta.create({
            de,
            para,
            assunto,
            texto,
            html,
            status
        });
    }
}