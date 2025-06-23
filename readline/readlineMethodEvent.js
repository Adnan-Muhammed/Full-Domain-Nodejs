const readline = require('readline');

// Method: createInterface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter something > ' // Method: setPrompt
});

// Method: prompt
rl.prompt();

// Event: 'line' - triggered when the user presses Enter
rl.on('line', (input) => {
  console.log(`You entered: ${input}`);

  if (input === 'pause') {
    rl.pause(); // Method: pause
    console.log('Input paused. Type "resume" to continue.');
  } else if (input === 'resume') {
    rl.resume(); // Method: resume
  } else if (input === 'exit') {
    rl.close(); // Method: close
  } else {
    rl.prompt();
  }
});

// Event: 'pause'
rl.on('pause', () => {
  console.log('Paused...');
});

// Event: 'resume'
rl.on('resume', () => {
  console.log('Resumed...');
  rl.prompt();
});

// Event: 'close'
rl.on('close', () => {
  console.log('Session ended.');
  process.exit(0);
});

// Event: 'SIGINT' (Ctrl+C)
rl.on('SIGINT', () => {
  console.log('\nCaught interrupt signal (Ctrl+C)');
  rl.close();
});
