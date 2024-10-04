const fs = require('fs')

fs.watch("fsmodules/example3.txt", (eventType, filename) => {
    console.log(`File ${filename} has been ${eventType}`);
  });
  

  