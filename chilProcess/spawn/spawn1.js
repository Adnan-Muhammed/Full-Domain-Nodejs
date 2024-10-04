const { spawn } = require('child_process');

const dir = spawn('dir', [], { shell: true }); // 'dir' command with shell option

dir.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

dir.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

dir.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
