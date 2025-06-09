const { execSync } = require('child_process')

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', shell: true })
}

switch (process.platform) {
  case 'win32':
    run('yarn build:win')
    break
  case 'darwin':
    run('yarn build:mac')
    break
  case 'linux':
    run('yarn build:linux')
    break
  default:
    console.error(`Unsupported platform: ${process.platform}`)
    process.exit(1)
}
