const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');

// 🔽 Pointing to files inside the workouts folder
const inputFile = path.join(__dirname, 'workouts', 'example.txt');
const outputFile = path.join(__dirname, 'workouts', 'example2.txt');

// Create read and write streams
const readStream = fs.createReadStream(inputFile, { encoding: 'utf8' });
const writeStream = fs.createWriteStream(outputFile);

// Transform stream: convert content to uppercase
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const upperChunk = chunk.toString().toUpperCase();
    callback(null, upperChunk);
  }
});

// Pipe the stream: Read → Transform → Write
readStream
  .pipe(upperCaseTransform)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('✅ Uppercase transformation complete. Check workouts/example3.txt');
  });
