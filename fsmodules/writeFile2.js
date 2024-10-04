const fs = require("fs");

fs.writeFile("fsmodules/example1.txt", "file one", (err) => {
    if (err) {
      console.log('write file error',err);
    } else {
      console.log("successfully write file");
    }
  });
  
  fs.writeFile("fsmodules/example2.txt", "file two", (err) => {
    if (err) {
      console.log('write file error',err);
    } else {
      console.log("successfully write file");
    }
  });
  fs.writeFile("fsmodules/example3.txt", "file three", (err) => {
    if (err) {
      console.log('write file error',err);
    } else {
      console.log("successfully write file");
    }
  });
  fs.writeFile("fsmodules/example4.txt", "file four", (err) => {
    if (err) {
      console.log('write file error',err);
    } else {
      console.log("successfully write file");
    }
  });
        



fs.readFile("fsmodules/example1.txt", "utf8", (err, data) => {
  if (err) {
    console.log('read file error',err);
  } else {
    console.log('read file success \n its the example1.txt file :==',data);
  }
});




fs.appendFile("fsmodules/example2.txt", "// its second line comment", (err) => {
  if (err) {
    console.log('appendfile error',err);
  } else {
    console.log("append data successfully");
  }
});
