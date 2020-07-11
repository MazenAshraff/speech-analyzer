const express = require('express');
const apikey = process.env.API_KEY;
const apiID = process.env.API_ID;
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const bodyparser = require('body-parser');
var aylien = require('aylien_textapi');
dotenv.config();
const app = express();
app.use(express.static('dist'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

const listening = () => console.log('listening on port 8081')

app.listen(8081, listening);

var textapi = new aylien({
    application_id: `${process.env.API_ID}`,
    application_key: `${process.env.API_KEY}`
});
app.post('/dataposted', (req, res) => {
    let theText = req.body['text'];
    console.log(theText);
    textapi.sentiment({
        'text': theText
    }, function(error, response) {
        if (error === null) {
            console.log(response);
            res.send(response);
        } else {
            console.log(error);
            res.send({ error: 'i send error' });
        }
    })
});

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve('src/client/views/index.html'));
// })