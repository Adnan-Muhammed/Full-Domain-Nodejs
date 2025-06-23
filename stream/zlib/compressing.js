const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// const dirPath = path.join(__dirname, '../workouts');
const dirPath = path.join(__dirname);
console.log(dirPath);

const inputFile = path.join(dirPath, 'example.txt');
const compressedFile = inputFile + '.gz';

// Check if compressed file exists
if (fs.existsSync(compressedFile)) {
  // Decompress
  const inputStream = fs.createReadStream(compressedFile);
  const outputStream = fs.createWriteStream(inputFile);

  inputStream
    .pipe(zlib.createGunzip())
    .pipe(outputStream)
    .on('finish', () => {
      console.log('✅ Decompressed back to example.txt');
      fs.unlinkSync(compressedFile); // Remove .gz after decompressing
    });
} else {
  // Compress
  const inputStream = fs.createReadStream(inputFile);
  const outputStream = fs.createWriteStream(compressedFile);

  inputStream
    .pipe(zlib.createGzip())
    .pipe(outputStream)
    .on('finish', () => {
      console.log('✅ Compressed to example.txt.gz');
      fs.unlinkSync(inputFile); // Remove original after compressing
    });
}
