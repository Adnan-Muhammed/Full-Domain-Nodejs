const fs = require("fs");

fs.stat("fsmodules/", (err, stats) => {
  if (err) {
    console.log(err);
  } else {
    console.log(stats);
  }
});
