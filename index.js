const { spawn } = require('child_process');
const ping = spawn('ping', ['8.8.8.8']);

ping.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ping.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ping.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});


