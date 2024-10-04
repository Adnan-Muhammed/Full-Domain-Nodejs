const { fork } = require('child_process');
const path = require('path');

// Create a child process using fork
const child = fork(path.join(__dirname, 'fork.js'));

// Send a message to the child process
child.send('Hello from the parent process!');

// Handle messages from the child process
child.on('message', (message) => {
  console.log(`Parent received message: ${message}`);
});

// Handle the exit event of the child process
child.on('exit', (code) => {
  console.log(`Child process exited with code ${code}`);
});


// Child received message: Hello from the parent process!
// Parent received message: Hello from the child process. Received: Hello from the parent process!


