# 🛠 Development Guide

This document explains how to set up your environment for TykoTech Fork development.

## Environment Setup

1. Install **Node.js v20** or newer.
2. Enable **Corepack** and activate Yarn 4.6.0:

   ```bash
   corepack enable
   corepack prepare yarn@4.6.0 --activate
   ```
3. Check your network configuration. TykoTech Fork downloads packages from npm. If you are behind a proxy or firewall, set the `HTTP_PROXY` and `HTTPS_PROXY` variables. If installs fail, see [Proxy Troubleshooting](#proxy-troubleshooting).

### Proxy Troubleshooting
If installs fail or you receive network errors, clear the proxy settings and test connectivity:

```bash
unset HTTP_PROXY HTTPS_PROXY
npm config delete proxy
npm config delete https-proxy
ping registry.npmjs.org
```


## Install Dependencies

Run `yarn install` to fetch dependencies. If it fails with network errors, revisit the proxy settings above.


## Starting the App in Development Mode

```bash
yarn dev
```

The application will launch with hot reloading enabled.

## Building Packages

You can create production builds for different platforms:

```bash
# Build for the current OS
yarn build:current_os
# Or build explicitly for Windows, macOS or Linux
yarn build:win
yarn build:mac
yarn build:linux
```

## Running Tests

Run all test suites with:

```bash
yarn test
```

## Checking for Vulnerabilities

After installing dependencies, run `yarn npm audit` to scan for known security
issues:

```bash
yarn npm audit
```

The command lists vulnerabilities grouped by severity. Focus on packages marked
**moderate**, **high**, or **critical**. Upgrade affected dependencies with
`yarn up <package>` and commit the updated `yarn.lock`. If a fix is not
available, consult the maintainers or open an issue for guidance.
