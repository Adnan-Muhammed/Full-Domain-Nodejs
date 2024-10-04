const fs = require("fs");

fs.unlink("fsmodules/example4.txt", (err) => {
  if (err) {
    console.log("didn't delete it");
  } else {
    console.log("successfully deleted");
  }
});
