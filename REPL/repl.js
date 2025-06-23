// customRepl.js
const repl = require('repl');

const myRepl = repl.start({
  prompt: 'MyREPL> ', // Custom prompt
});

// Add your own variables or functions to the REPL context
myRepl.context.greet = function(name) {
  return `Hello, ${name}!`;
};
