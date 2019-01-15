const bcrypt = require('bcryptjs')


module.exports={
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
                    req.session.user = user[0].username
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
    getUserImages: (req, res, next) => {
        let {user} = req.params
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
    getImages: (req,res,next) => {
        let images = testUser[0].imgTable
        res.status(200).send(images)
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