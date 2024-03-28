const jwt=require('jsonwebtoken');
// Middleware for handling auth

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token=req.headers.authorization;
    const word=token.split(" ");
    const decoded=jwt.verify(word[1],'secret');
     if(!decoded){
         return res.status(401).json({msg:"You are not logged in!"});
     }else{
        req.user = decoded;
        next();
     } 
}

module.exports = adminMiddleware;