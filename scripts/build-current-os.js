const { execSync } = require('child_process');
const platform = process.platform;
let cmd;
if (platform === 'win32') {
  cmd = 'yarn build:win';
} else if (platform === 'darwin') {
  cmd = 'yarn build:mac';
} else {
  cmd = 'yarn build:linux';
}
try {
  execSync(cmd, { stdio: 'inherit' });
} catch (error) {
  console.error(`Failed to execute build command: "${cmd}".`);
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
