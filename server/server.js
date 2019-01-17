require('dotenv').config()
let {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, ENVIRONMENT} = process.env
    const express = require('express'),
    session = require('express-session')({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    }),
    app = express(),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    ctrl = require('./controller')
    app.use(bodyParser.json())
    app.use(session)
    
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

    /* VR-Art-Gallery Endpoints */
    //Landing Page - Register/Login
    app.get('/api/getAllGalleries/:offset', ctrl.getAllGalleries)
    app.post('/api/registerUser', ctrl.registerUser)
    app.post('/api/login', ctrl.login)
    app.put('/api/incrementView/:galleryId', ctrl.incrementView)
    app.post('/api/addToFavorites/:galleryId', ctrl.addToFavorites)
    app.delete('/api/deleteFromFavorites/:galleryId', ctrl.deleteFromFavorites)

    //Lobby
    app.get('/api/checkUser/', ctrl.checkUser)
    app.get('/api/retrieveGalleries/', ctrl.retrieveGalleries)
    app.get('/api/getFavorites/', ctrl.getFavorites)

    app.post('/api/logout/', ctrl.logout)

    app.delete('/api/deleteGallery/:id', ctrl.deleteGallery)
    
    //Art-Gallery
    app.get('/api/getGalleryData/:username/:galleryName', ctrl.getGalleryData)

    // PORT
    PORT = SERVER_PORT || 4500
    app.listen(PORT, ()=> console.log(`Someone is looking at Art on ${PORT}`))

    //Connecting to Database through Massive
    massive(CONNECTION_STRING).then(db => app.set('db', db))