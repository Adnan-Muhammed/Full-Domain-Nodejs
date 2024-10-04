const fs = require('fs')

fs.copyFile('fsmodules/example2.txt','fsmodules/example4.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('copy success');
        
    }
})

//  before run    its the content
// file four 


// then update with example2.txt
