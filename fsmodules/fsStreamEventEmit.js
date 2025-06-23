const fs = require('fs');

// const reader = fs.createReadStream('fsmodules/example1.txt');  


const reader = fs.createReadStream('fsmodules/example1.txt',{encoding:'utf8'});
// {encoding:'utf8'} preffered way to buffer encoding


reader.on('data', (chunk) => {
  console.log('📦 Received:', chunk);
});
