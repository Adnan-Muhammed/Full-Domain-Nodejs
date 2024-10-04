const fs = require('fs');



const { stringify } = require('querystring');


fs.readFile('fsmodules/example.txt',((err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString()); //   file  
    }
}))



fs.readFile('fsmodules/example.txt',((err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(stringify(data)); //   file  
    }
}))




//  fs.writeFile('fsmodules/example.txt',"hello",(err=>{
//     if(err){
//         console.log('error found',err);
//     }else{
//         console.log('file created');
//     }
//  }))
