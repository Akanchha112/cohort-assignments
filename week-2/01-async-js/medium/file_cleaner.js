const fs=require("fs")

const filename="clean.txt";

fs.writeFile(filename,"hello     world    my    name   is       raman",(err)=>{
    console.log(err);
})
let cleandata='';
fs.readFile(filename,'utf8',(err,data)=>{
    if(err){
        console.log("can't open file");
    }
    else{
        for(i=0;i<data.length;i++){
            if(data[i]===" "){
                while(data[i]===" "){
                    i++;
                }
                cleandata+=" ";
                i--;
            }
            else{
                // console.log(data[i]);
                cleandata+=data[i];
            }
        }
        console.log(cleandata);
    }
})

fs.writeFile(filename,cleandata,(err)=>{
    if(!err){
        console.log("Added");
    }
    else{
        console.log(err);
    }
})