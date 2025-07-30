var fs = require("fs");
fs.readFile("abc.txt",function(err,data){
    console.log("data:"+data);
});
fs.writeFile("abc.txt","deleted",function(err){
    if (err) console.log(err);
    else console.log("done");
});

fs.unlink("abc.txt",function(){
    console.log("deleted");
});

fs.mkdir("./testfile",(err)=>{
    if (err){
        console.log("error",err);
    }
    console.log("file created")
});

fs.rmdir("./testfile",(err)=>{
    if(err){
        console.log("error while deleting",err);
    }
    console.log("deleted file");
});