const EventEmitter = require('events');
const pubsub = new EventEmitter();

// Subscriber
pubsub.on('news', (data) => {
  console.log(`Subscriber 1 received: ${data}`);
});

pubsub.on('news', (data) => {
  console.log(`Subscriber 2 received: ${data}`);
});

pubsub.on('news', (data) => {
  console.log(`Subscriber 3 received: ${data}`);
});

// Publisher
pubsub.emit('news', 'New article published!');