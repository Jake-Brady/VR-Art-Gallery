require('dotenv').config()
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, ENVIRONMENT, S3_BUCKET_THUMBNAILS, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env
    const express = require('express'),
    session = require('express-session')({
        secret: SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    }),
    app = express(),
    aws = require('aws-sdk'),
    massive = require('massive'),
    ctrl = require('./controller')

    app.use(express.json())
    app.use(session)
    app.use(express.static( `${__dirname}/../build` ))

    /* VR-Art-Gallery Endpoints */
    /* AWS Connecting Endpoints - Section 1 */
    // AWS Thumbnails
    app.get('/api/amazons3/thumbnails/', (req, res) => {
        console.log("in the server on api/amazons3")
        aws.config = {
            region: 'us-west-1',
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY
        }
        const s3 = new aws.S3();
        const fileName = req.query['file-name'];
        const fileType = req.query['file-type'];
        const s3Params = {
            Bucket: S3_BUCKET,
            Key: fileName,
            Expires: 60,
            ContentType: fileType,
            ACL: 'public-read'
        };
    
        s3.getSignedUrl('putObject', s3Params, (err, data) => {
            if (err) {
                console.log(err);
                return res.end();
            }
            const returnData = {
                signedRequest: data,
                url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
            };
    
            return res.send(returnData)
        });
    });

    // AWS Images
    app.get('/api/amazons3/images/', (req, res) => {
        console.log("in the server on api/amazons3")
        aws.config = {
            region: 'us-west-1',
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY
        }
        const s3 = new aws.S3();
        const fileName = req.query['file-name'];
        const fileType = req.query['file-type'];
        const s3Params = {
            Bucket: S3_BUCKET,
            Key: fileName,
            Expires: 60,
            ContentType: fileType,
            ACL: 'public-read'
        };
    
        s3.getSignedUrl('putObject', s3Params, (err, data) => {
            if (err) {
                console.log(err);
                return res.end();
            }
            const returnData = {
                signedRequest: data,
                url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
            };
    
            return res.send(returnData)
        });
    });

    /* Section 2 */
    //Landing Page - Register/Login
    app.get('/api/getAllGalleries/:offset', ctrl.getAllGalleries)
    app.post('/api/registerUser/', ctrl.registerUser)
    app.post('/api/login/', ctrl.login)
    app.put('/api/incrementView/:galleryId', ctrl.incrementView)
    app.post('/api/addToFavorites/', ctrl.addToFavorites)
    app.delete('/api/deleteFromFavorites/:galleryId', ctrl.deleteFromFavorites)
    app.put('/api/adjustGalleryFavorites/:galleryId', ctrl.adjustGalleryFavorites)

    //Lobby
    app.get('/api/checkUser/', ctrl.checkUser)
    app.get('/api/retrieveGalleries/', ctrl.retrieveGalleries)
    app.get('/api/getFavorites/', ctrl.getFavorites)
    app.post('/api/logout/', ctrl.logout)
    app.delete('/api/deleteGallery/:id', ctrl.deleteGallery)
    app.post('/api/createNewGallery/', ctrl.createNewGallery)
    app.get('/api/editGallery/:id', ctrl.getGalleryToEdit)
    app.put('/api/updateGallery/:galleryId', ctrl.updateGallery)
    app.get('/api/getUsersWhoFavorited/', ctrl.getThoseWhoLiked)
    
    //Art-Gallery
    app.get('/api/getGalleryData/:username/:galleryName', ctrl.getGalleryData)

    // PORT
    PORT = SERVER_PORT || 4500
    app.listen(PORT, ()=> console.log(`Someone is looking at Art on ${PORT}`))

    //Connecting to Database through Massive
    massive(CONNECTION_STRING).then(db => app.set('db', db))