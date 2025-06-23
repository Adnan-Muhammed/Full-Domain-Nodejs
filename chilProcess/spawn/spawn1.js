const { spawn } = require('child_process');


// const dir = spawn('dir',['-lh'])   // not proper 


const dir = spawn('dir', [], { shell: true }); // 'dir' command with shell option
// const dir = spawn('cmd.exe', ['/c', 'dir']);


dir.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});


dir.stderr.on('data', (data) => {
  console.error(555, `stderr: ${data}`);
});


dir.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


// dir.exit('SIGKILL'); // Force kill the process

