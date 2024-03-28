const { Router } = require("express");
const { Admin,Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const courseId=0;
// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username=req.headers.username;
    // const email=req.headers.email;
    const password=req.headers.password;
    // if (!username || !password ) return res.status(400).json({ error: "Missing required fields" });
    // if(username.length < 5){
    //     return res.status(422).send('Username must be at least 5 characters long');
    // }
    // const existingUser=await Admin.findOne({username:username});
    // if(existingUser) return res.status(404).send( 'Username already in use' );
    // if(password.length<4) return res.status(422).send('Password must contain at least 4 characters');
    Admin.create({
        username:username,
        password:password
    })
    // user.save();
    console.log(`Admin ${username} has been created`);
    res.json({ message:'Admin created successfully'});

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const  description=req.body.description;
    const price=Number(req.body.price);
    const imageLink=req.body.imageLink;

    const newCourse= await Course.create({
        title:title,
        price:price,
        description:description,
        imageLink:imageLink
    })
    console.log(newCourse);
    // course.save();
    res.json({message:'Course created successfully', courseId: newCourse._id});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        course:response
    })
});

module.exports = router;