const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
const nodemailer = require('nodemailer');
const mongoDB = require('./mongoDB');

app.use('/css', express.static("./public/css"));
app.use('/js', express.static("./public/js"));
app.use('/images', express.static("./public/images"));
app.use('/fonts', express.static("./public/fonts"));

app.post('/contact', urlencodedParser, function (req, res) {
    if (!req.body.name && !req.body.surname && !req.body.phone && !req.body.email && !req.body.password && !req.body.checkbox) {
        res.send('Данные отсутствуют');
    } else {
        if (typeof req.body.checkbox == 'undefined') {
            req.body.checkbox = 'off'
        }
        const contactData = {
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            checkbox: req.body.checkbox
        };
        const message = (`Имя - ${req.body.name}<br>
                  Фамилия - ${req.body.surname}<br>
                  Телефон - ${req.body.phone}<br>
                  E-mail - ${req.body.email}<br>
                  Пароль - ${req.body.password}<br> 
                  Условия - ${req.body.checkbox}`);

        mongoDB.mongo(contactData);

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'your email',
                pass: 'your password'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let mailOptions = {
            from: '"Node.js App" <karpenko.vlad10@gmail.com>',
            to: 'karpenko.vlad10@gmail.com',
            subject: 'Contact data',
            html: message
        };

// send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            res.sendFile(path.join(__dirname, './public', 'catalog.html'));
        });
    }
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'contact.html'));
});

app.get('/catalog', function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'catalog.html'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './public', '404.html'));
});

app.listen(3000);
console.log('Server running at http: http://localhost:3000');