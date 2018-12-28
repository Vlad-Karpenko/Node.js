const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use('/css', express.static("./public/css"));
app.use('/js', express.static("./public/js"));
app.use('/images', express.static("./public/images"));
app.use('/fonts', express.static("./public/fonts"));

app.post('/contact', urlencodedParser, function (req, res) {
    if (!req.body.name && !req.body.email && !req.body.password && !req.body.checkbox) {
        res.send('Данные отсутствуют');
    } else {
        res.send(`Имя - ${req.body.name}<br>
                  E-mail - ${req.body.email}<br>
                  Пароль - ${req.body.password}<br> 
                  Согласны? - ${req.body.checkbox}`);
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

// app.get('/:id/:name', function (req, res) {
//     res.send(`Your id - ${req.params.id}<br>
//               Your name - ${req.params.name}`);
// });

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './public', '404.html'));
});

app.listen(3000);
console.log('Server running at http: http://localhost:3000');