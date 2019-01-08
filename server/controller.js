const bcrypt = require('bcryptjs')

//Test User Simulation
let testUser = [
    {
    id: 1,
    username: 'YumYums',
    password: 'pussyDestroyer',
    email: 'lickmyballs@aol.com',
    imgTable: {
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrZUHbBHHyzx7YI8l8GV1xcGnTiaRpzkq0AaOl_R0Z83464Ns',
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
            // Check whether username or email address already exist to avoid duplicates
            // Create new account if above sql file returns false
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