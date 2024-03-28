const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://sakanchha111:RHCk0rt5sBKHID7H@cluster3.pasbi7b.mongodb.net/course1');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {type : String,unique:true},
    password  :{type:String,required:true},
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }] 
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    // courseId: {type : Integer , unique : true},
    title: { type: String , required: true },
    price: { type: Number , required: true },
    description: { type: String , required: false },
    imageLink: { type: String , required: false }
    // CreatedBy:{type: mongoose.Types.ObjectId, ref:'Admin'}
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}