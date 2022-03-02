const nodemailer = require('nodemailer')
const email = process.env.EMAIL_ACCOUNT
const pwd = process.env.EMAIL_PWD
console.log(email, pwd)
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: email,
        pass: pwd,
    }
})

module.exports.sendValidationEmail = user => {
    transporter
    .sendMail({
        from: `'Arquitetura de Servidores' <${email}>`,
        to: user.email,
        subject: `'Welcome '${user.name}`,
        html: `
            <h1> Welcome </h1>
            <p>Active your account<p/>
            <a href="http://localhost:8001/api/users/${user.id}/activate">Click here</a>    
            `
    })
    .then(() => {
        console.log(`email sent to ${user.id}`)
    })
    .catch((err) => {
        console.error('error sending mail ', err)
    })
}