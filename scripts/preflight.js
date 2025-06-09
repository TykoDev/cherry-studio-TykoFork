#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.warn('node_modules directory not found. Run "yarn install" first.');
  process.exitCode = 1;
} else {
  console.log('node_modules present.');
}
