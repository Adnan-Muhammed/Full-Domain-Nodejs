const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Say something> '
});

rl.prompt();

rl.on('line', (line) => {
  console.log(`You said: ${line}`);
  if (line === 'exit') rl.close();
  else rl.prompt();
});

rl.on('close', () => {
  console.log('Bye!');
  process.exit(0);
});
