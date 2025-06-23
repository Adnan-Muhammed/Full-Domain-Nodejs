const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

// 1️⃣ Basic custom event emitter
const myEmitter = new EventEmitter();
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});
myEmitter.emit('greet', 'Adnan');


// 2️⃣ Event emitter with multiple listeners
const multiEmitter = new EventEmitter();
multiEmitter.on('status', () => console.log('🔵 Status: Ready'));
multiEmitter.on('status', () => console.log('🟢 Status: OK'));
multiEmitter.emit('status');


// 3️⃣ EventEmitter with once() – fires only once
const oneTimeEmitter = new EventEmitter();
oneTimeEmitter.once('init', () => {
  console.log('🚀 System initialized once.');
});
oneTimeEmitter.emit('init');
oneTimeEmitter.emit('init'); // won't run again


// 4️⃣ Stream example: indirectly using EventEmitter
const inputPath = path.join(__dirname, 'example.txt');
const readStream = fs.createReadStream(inputPath);

readStream.on('data', (chunk) => {
  console.log('📦 Chunk received:', chunk.toString().slice(0, 30)); // show first 30 chars
});

readStream.on('end', () => {
  console.log('✅ Finished reading file.');
});


// 5️⃣ Writable stream with 'finish' event
const outputPath = path.join(__dirname, 'example2.txt');
const writeStream = fs.createWriteStream(outputPath);

writeStream.write('Writing some data...\n');
writeStream.write('This is part of the stream!\n');
writeStream.end(); // triggers 'finish'

writeStream.on('finish', () => {
  console.log('📝 Finished writing to file.');
});
