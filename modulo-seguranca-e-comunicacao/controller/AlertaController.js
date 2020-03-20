const Alerta = require('../model/Alerta');
require("dotenv-safe").config();

module.exports = {
    async notifica(request, response) {
        
        try {
            const sgMail = require('@sendgrid/mail');
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            let {afetados, de, assunto, texto, html} = request.body ; 
            afetados = afetados.split(',').map(afetado => afetado.trim());
            
            afetados.forEach(para => {
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
        } catch (err) {
            throw new Error(err);
        }
    },

    async store(data) {
        let {de, para, assunto, texto, html, status} = data;

        Alerta = await Alerta.create({
            de,
            para,
            assunto,
            texto,
            html,
            status
        });

        return response.json(user);
    }
}