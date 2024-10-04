const { exec } = require('child_process');

// Running a shell command (e.g., 'dir' in Windows)
exec('dir', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});
