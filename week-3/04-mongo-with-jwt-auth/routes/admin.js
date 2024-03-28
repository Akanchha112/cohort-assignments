const { Router } = require("express");
const jwt=require('jsonwebtoken');
const {Admin,Course} = require('../db');
// import {z} from "zod";
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.headers.username;
    const password=req.headers.password;
    Admin.create({
        username,
        password
    })
    res.json({
        message:'Admin created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username=req.headers.username;
    const password=req.headers.password;
    const response = await Admin.find({
        username:username,
        password:password
    })
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

router.post('/courses', adminMiddleware,async (req, res) => {
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