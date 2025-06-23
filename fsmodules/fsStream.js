const fs = require('fs');

// Create a readable stream
const stream = fs.createReadStream('fsmodules/example1.txt', { encoding: 'utf8' });


stream.on('open',()=>{
    console.log('its open');
})
// Listen for built-in events
stream.on('data', (chunk) => {
    console.log('📦 Received chunk:', chunk);
});


stream.on('end', () => {
    console.log('✅ Stream ended.');
});

stream.on('error', (err) => {
  console.error('❌ Error occurred:', err.message);
});
