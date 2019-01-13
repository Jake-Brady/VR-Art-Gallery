const bcrypt = require('bcryptjs')

//Test User Simulation
let testUser = [
    {
    id: 1,
    username: 'YumYums',
    pw: 'pussyDestroyer',
    email: 'lickmyballs@aol.com',
    imgTable: {
        img1: 'https://lovinlife.com/wp-content/uploads/2018/09/Dog.jpg',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ',
        img3: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/450px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
        img4: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg',
        img5: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1280px-David_-_The_Death_of_Socrates.jpg',
        img6: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1920px-Nighthawks_by_Edward_Hopper_1942.jpg',
        img7: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg',
        img8: 'https://uploads5.wikiart.org/images/edvard-munch/cupid-and-psyche-1907.jpg!Large.jpg',
        img9: 'https://uploads2.wikiart.org/00198/images/pablo-picasso/old-guitarist-chicago.jpg!Large.jpg',
        img10: 'https://a.1stdibscdn.com/e2-kleinveld-and-julien-photography-ode-to-wyeths-christinas-world-for-sale/a_1052/a_35080321541535432771/Ode_to_Wyeths_Christinas_World_E2_JonathanFerraraGalleryNewOrleans_master.jpg?width=768'
    }
}
]


module.exports={
    registerUser: (req,res,next) => {
        console.log(req.body)
        let {firstname, lastname, username, email, password} = req.body
        //Salt and Hash password
        const salt = bcrypt.genSaltSync(10)
        const passwordHashed = bcrypt.hashSync(password, salt)
         

        //Check for existing email address and username. If both are false, then register new user.
        const db = req.app.get('db/LandingPage')
        db.check_email([email]).then(user => {
            if (user[0]){
                res.status(200).send('email')
            } else {
                db.check_username([username]).then(user => {
                    if (user[0]){
                        res.status(200).send('username')
                    } else {
                        db.register_user([username, passwordHashed, email, firstname, lastname]).then((user) => {
                            req.session.user = user[0].username
                        })
                    }
                })
            }
        })
    },
    login: (req,res,next) => {
        
    },
    getImages: (req,res,next) => {
        let images = testUser[0].imgTable
        res.status(200).send(images)
    }
    // login handle,
    // getUserImages based on username -> Portrait images that are uploaded by users
    // User_Presets -> These refer largely to textures that the user chooses for their art gallery
    //
}