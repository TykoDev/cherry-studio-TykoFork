const fs = require('fs');

if (!fs.existsSync('node_modules')) {
  console.warn('No node_modules directory found. Please run "yarn install" first.');
  process.exitCode = 1;
} else {
  console.log('Dependencies present.');
}
