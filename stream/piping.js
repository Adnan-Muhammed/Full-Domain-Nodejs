//base

// const fs = require('fs');
// const read = fs.createReadStream('input.txt');
// const write = fs.createWriteStream('output.txt');
// read.pipe(write);



const fs = require('fs');
const path = require('path');

// Full paths to files inside workouts folder
const inputPath = path.join(__dirname, 'workouts', 'example.txt');
const outputPath = path.join(__dirname, 'workouts', 'writeStreamThroughPiping.txt');

// Create read and write streams
const readStream = fs.createReadStream(inputPath);
const writeStream = fs.createWriteStream(outputPath);

// Pipe data from input file to output file
readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('✅ File copied successfully using pipe!');
});
