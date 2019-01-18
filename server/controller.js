const bcrypt = require('bcryptjs')

module.exports={
    getAllGalleries: (req, res, next) => {
        // offset variable destructured from params to be passed as offset in query
        const {offset} = req.params
        const {userId} = req.session
        // get all galleries for non-registered users.
        const db = req.app.get('db')
        db.get_all_public_galleries([offset]).then(galleries => {
            // Checks to see whether user is logged in to retrieve favorites along with galleries to compare on client side.
            if (userId){
               db.get_favorites([userId]).then(favorited => {
                   res.status(200).send(favorited)
               }).catch(err => {
                   console.log(err)
                   res.status(500).send(err)
               })
            }
            res.status(200).send(galleries)}).catch(err => {
                console.log(err)
                res.status(500).send(err)
            })

            
    },
    addToFavorites: (req, res, next) =>{
        let {galleryId} = req.params
        let {userId} = req.session
        const db = req.app.get('db')
        console.log(galleryId, 'this is galleryID')
        console.log(userId, 'this is user id pulled off of req.session')
        db.add_to_favorites([userId, galleryId]).then(favorited => {
            res.status(200).send(favorited)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    deleteFromFavorites: (req, res, next) => {
        let {galleryId} = req.params
        let {userId} = req.session
        const db = req.app.get('db')
        console.log(galleryId, 'this is galleryID')
        console.log(userId, 'this is user id pulled off of req.session')
        db.delete_from_favorites([userId, galleryId]).then(deleted => {
            res.status(200).send(deleted)
        }).catch(err => {
            console.log(err)
            res.status(500). send(err)
        })
    },
    adjustGalleryFavorites: (req, res, next) => {
        let {galleryId} = req.params
        console.log(req.params, 'params')
        console.log(req.body, 'body')
        let {Increase, Decrease} = req.body
        console.log(Increase, 'this is increment off of req.body')
        console.log(Decrease, 'this is decrement off of req.body')

        const db = req.app.get('db')
        if (Increase){

        } else if (Decrease){

        }

    },
    incrementView: (req, res, next) => {
        let {galleryId} = req.params
        console.log(galleryId)
        const db = req.app.get('db')
        db.increment_view([galleryId]).then(view => {
            res.status(200).send(view)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    registerUser: (req,res,next) => {
        let {firstName, lastName, username, email, password} = req.body
        //Salt and Hash password
        const salt = bcrypt.genSaltSync(10)
        const passwordHashed = bcrypt.hashSync(password, salt)
        //Check for existing email address and username. If both are false, then register new user.
        const db = req.app.get('db')
        db.check_email([email]).then(user => {
            if (user[0]){
                res.status(200).send('email')
            } else {
                db.check_username([username]).then(user => {
                    if (user[0]){
                        res.status(200).send('username')
                    } else {
                        db.register_user([username, passwordHashed, email, firstName, lastName]).then(user => {
                            res.status(200).send('success')
                        }).catch(err => {
                            console.log(err)
                            res.status(500).send(err)
                        })
                    }
                }).catch(err => {
                    console.log(err)
                    res.status(500).send(err)
                })
            }
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    login: (req,res,next) => {
        let {username, password} = req.body
        const db = req.app.get('db')
        db.check_user_login([username]).then(user => {
            //if username exists, the array will have a length
            if(user.length){
                const validPassword = bcrypt.compareSync(password, user[0].password)
                //if the password is correct, validPassword will become truthy
                if (validPassword) {
                    req.session.user
                    req.session.userId
                    req.session.user = user[0].username
                    req.session.userId = user[0].id
                    res.status(200).send(user[0])
                } else {
                //if password is incorrect, validPassword would be falsy and send wrong password.
                    res.status(200).send('Wrong Password')
                }
            } else {
                //if the above doesn't work, then the username does not exist.
                res.status(200).send('Wrong Username')
            }
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    getGalleryData: (req, res, next) => {
        let {username, galleryName} = req.params
        const db = req.app.get('db')
        db.get_gallery_images([galleryName, username]).then(images => {
            res.status(200).send(images)
        })
    },
    checkUser: (req,res,next) => {
        const {user} = req.session
        res.status(200).send(user)
    },
    retrieveGalleries: (req, res, next) => {
        const {user} = req.session
        const db = req.app.get('db')
        db.get_gallery_info([user]).then(galleries => {
            res.status(200).send(galleries)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    getFavorites: (req, res, next) => {
        const {user} = req.session
        const db = req.app.get('db')
        db.get_favorites([user]).then(favorites  => {
            res.status(200).send(favorites)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    deleteGallery: (req, res, next) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.delete_gallery([id])
        res.sendStatus(200)
    },
    logout: (req, res, next) => {
        req.session.destroy()
        res.sendStatus(200)
    }
    // login handle,
    // getUserImages based on username -> Portrait images that are uploaded by users
    // User_Presets -> These refer largely to textures that the user chooses for their art gallery
    //
}