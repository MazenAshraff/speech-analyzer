const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.static('dist'));

console.log(`Your API key is ${process.env.API_KEY}`);

const listening = () => console.log('listening on port 8080')

app.listen(8080, listening);