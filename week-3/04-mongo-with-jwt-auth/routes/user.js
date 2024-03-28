const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt=require( "jsonwebtoken" );
const {User,Course}=require("../db");
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username=req.headers.username;
    const password=req.headers.password;

    const response=User.find({username});
    if(response){
        res.json({
            message:'User already exist'
        })
    }
    else{
        User.create({
            username,
            password
        })
        res.json({
            message:'User created successfully'
        })
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username= req.body.username || ''; 
    const password = req.body.password || '';
    
    const response=User.findOne({username,password})
    const userjwt={
        username:req.headers.username,
    }
    if(response){
        const token=jwt.sign(userjwt,'secret');
        res.header('authorizaton',token).json({
            token:token
        })
    }else{
        res.json({
            message:'invalid credentials'
        })
    }
      
         
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    const response=Course.find()
    res.json({
        course:response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    const username=req.username;
    User.updateOne({
        username:username
    },{
        '$push':{
            purchasedCourses:courseId
        }
    })
    res.json({
        message:'Course purchased successfully'
    })
});

router.get('/purchasedCourses', userMiddleware,async (req, res) => {
    // Implement fetching purchased courses logic
    const username=req.username;
    const user = await User.findOne({
        username: req.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router