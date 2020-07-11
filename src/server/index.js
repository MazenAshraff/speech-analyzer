const express = require('express');
const apikey = process.env.API_KEY;
const apiID = process.env.API_ID;
const cors = require('cors');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const aylien = require('aylien_textapi');
dotenv.config();
const app = express();
app.use(express.static('dist'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

const listening = () => console.log('listening on port 3000')

app.listen(3000, listening);

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
const theText = null;
app.post('/dataposted', (req, res) => {
    theText = req.body;
    textapi.sentiment({
        text: theText

    }, (error, response) => {
        if (error === null) {
            console.log('safe');
            res.send(response);
        } else {
            console.log('big fat error')
        }
    })
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/html'));
})