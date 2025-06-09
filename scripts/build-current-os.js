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
execSync(cmd, { stdio: 'inherit' });

