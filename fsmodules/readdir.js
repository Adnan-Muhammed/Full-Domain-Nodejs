const fs = require('fs')

fs.readdir('fsmodules',(err,files)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log(files);
        
    }
})


