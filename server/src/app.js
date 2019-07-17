const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

app.post('/register', (req, res) => {
    res.json({ msg: `Hello ${req.body.email}! Your account was created.` });
})

app.listen(5000, () => console.log('Server started...'));