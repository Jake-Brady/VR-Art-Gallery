const bcrypt = require('bcryptjs')

let testUser = [
    {
    id: 1,
    username: 'YumYums',
    password: 'pussyDestroyer',
    email: 'lickmyballs@aol.com',
    imgTable: {
        img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrZUHbBHHyzx7YI8l8GV1xcGnTiaRpzkq0AaOl_R0Z83464Ns',
        img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAzFOuzE07HdIByvXNGeBeflF-9wRpdDHAYKfkQQQjS1AiOZ',
        img3: 'https://www.argentarchives.org/files/gallery_image/Tirisfal_edited-1.jpg',
        img4: 'https://stmed.net/sites/default/files/wallpaper-wallpapers-25347-5113707.jpg',
        img5: 'https://best-wallpaper.net/wallpaper/1920x1200/1210/Astronaut-vast-green-grasslands_1920x1200.jpg',
        img6: 'http://www.irdes.fr/imgs2017/images/about-imgs.jpg',
        img7: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Angers%2C_La_Maine%2C_Pays_de_la_Loire%2C_France_-_panoramio.jpg',
        img8: 'http://imgs.org/Media/HeidlebergCastle.png',
        img9: 'http://www.studio-hive.co.uk/wp-content/uploads/2015/04/SevenAcres-IMGS-05.jpg',
        img10: 'http://www.irdes.fr/imgs2017/images/call-for-communications.jpg'
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