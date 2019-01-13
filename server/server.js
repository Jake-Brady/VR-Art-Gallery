require('dotenv').config()
    const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    session = require('express-session')
    ctrl = require('./controller')

    let {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, ENVIRONMENT} = process.env

    app.use(bodyParser.json())
    app.use(session({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    }))

//     app.use((req,res,next) => {
//     if (ENVIRONMENT === 'dev') {
//         req.app.get('db').set_data()
//         .then(userData => {
//             req.session.user = userData[0]
//             next()
//         })
//     } else {
//         next()
//     }
// })

    // VR-Art-Gallery Endpoints
    //Landing Page - Register/Login
    app.post('/api/register', ctrl.registerUser)

    //Lobby


    //Art-Gallery
    app.get('/api/getImages/', ctrl.getImages)

    // PORT
    PORT = SERVER_PORT || 4500
    app.listen(PORT, ()=> console.log(`Someone is looking at Art on ${PORT}`))

    //Connecting to Database through Massive
    massive(CONNECTION_STRING).then(db => app.set('db', db))