const EventEmitter = require('events'); // Node.js built-in
const emitter = new EventEmitter();

// Define a listener
emitter.on('dataReceived', (data) => {
  console.log('✅ Listener triggered with data:', data);
});

// A function that returns a Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "Adnan", age: 25 };
      resolve(data);
    }, 1000);
  });
};

// Use the Promise and emit event
fetchData()
  .then((data) => {
    emitter.emit('dataReceived', data); // 🔥 Emit custom event with data
  })
  .catch((err) => {
    emitter.emit('errorOccurred', err); // Optional error handling
  });
