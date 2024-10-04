const fs = require("fs");

fs.rename("fsmodules/example3.txt", "fsmodules/example_renamed.txt", (err) => {
  if (err) {
    console.log("didn't delete it");
  } else {
    console.log("successfully deleted");
  }
});
