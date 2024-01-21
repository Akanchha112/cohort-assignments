const fs=require("fs");

const filename="first.txt";

fs.appendFile(filename,
    "I hope this message finds you well",
    (err)=>{
        if(err){
            console.log("Error in opeming file");
        }
        else{
            console.log("Appended successfully");
        }
    }
    )
fs.readFile(filename,'utf8',(err,data)=>{
    if(err){
        console.log("Error in fule opening");
    }
    else{
        console.log(data);
    }
})