const {Admin}=require('../db');
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const name=req.headers.username;
    const password=req.headers.password;
    // if(name.length < 5 || password.length <4){
    //     return res.status(422).send('Username or password length is not correct');
    // }
    const existingUser=await Admin.findOne({username:name,password:password});
    if(!existingUser) res.status(403).send('User doesnt exist');
    next();
}

module.exports = adminMiddleware;