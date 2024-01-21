const fs=require('fs');

const filename="first.txt";

fs.writeFile(filename,"Hello, This is akanchha.",(err)=>{
    if(err){
        console.log("Error in file creation");
    }
    else{
        console.log("File created successfully");
    }
})