require('dotenv').config()
    const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    ctrl = require('./controller')

    let {SERVER_PORT} = process.env

    app.use(bodyParser.json())

    app.get('/api/register', ctrl.registerUser)


    PORT = SERVER_PORT || 4500
    app.listen(PORT, ()=> console.log(`Someone is looking at Art on ${PORT}`))