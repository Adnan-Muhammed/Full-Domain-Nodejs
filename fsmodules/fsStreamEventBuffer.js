const fs = require('fs');
const { Buffer } = require('buffer'); // optional, but shows you're using Buffer explicitly

const reader = fs.createReadStream('fsmodules/example1.txt');

reader.on('data', (chunk) => {
  // chunk is already a Buffer by default
  console.log('📦 Raw Buffer:', chunk);

  // Convert it using Buffer methods (manual decoding)
  const decoded = Buffer.from(chunk).toString('utf8');
  console.log('📄 Decoded Text:', decoded);
});
