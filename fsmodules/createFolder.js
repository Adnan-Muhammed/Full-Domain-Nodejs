

const fs = require('fs')

fs.mkdir('fsmodules/mkdirfolder',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('create folder');
    }
})