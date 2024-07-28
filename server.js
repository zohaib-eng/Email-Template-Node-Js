const express=require('express');
const app=express();
const nodemailer=require('nodemailer');
const pug=require('pug')


const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'gregoria.kassulke@ethereal.email',
        pass: 'FWcaxEArWxP72ypyvX'
    }
});


app.get('/email/text', (req, res) => {
    let body = pug.renderFile('views/email.pug')
    transporter.sendMail({
        from: 'gregoria.kassulke@ethereal.email',
        to: 'chzohaib860@gmail.com',
        subject: 'Working email',
        html: body
    })
        .then(info => res.send(info))
        .catch(error => res.send(error))
})


app.use(express.json());
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app listening at http://0.0.0.0:${PORT}.`);
});
module.exports = app;