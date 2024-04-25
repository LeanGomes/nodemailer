const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host:'smtp-mail.outlook.com', //smp do outlook (pesquisar por smp outlook)
    port:'587', 
    secure: false,
    auth: {
        user: ' seuemail@outlook.com',
        pass: 'suasenha',
    }
});

transport.sendMail({
    from: 'Seu nome <seuemail@outlook.com>',
    to: 'email@exemplo.com',
    subject: 'Enviando email teste com o nodemailer',
    html: '<h1>Teste de envio de email por nodemailer</h1>',
    text: 'Teste nodeemailer!!!',
})
.then(() => console.log('Email enviado com sucesso!'))
.catch((err) => console.log('Erro no envio do email',err));