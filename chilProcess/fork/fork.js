// fork.js
process.on('message', (message) => {
    console.log(`Child received message: ${message}`);
  
    // Sending a response back to the parent process
    process.send(`Hello from the child process. Received: ${message}`);
  });
  