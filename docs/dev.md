# TykoTech Fork Development Guide

This document describes how to set up a development environment for TykoTech Fork.

## Requirements

- **Node.js** v20 or newer
- **Yarn** v4.6.0 (managed via Corepack)

## Setup

Run the following commands to prepare your environment:

```bash
corepack enable
corepack prepare yarn@4.6.0 --activate
# Install dependencies
yarn install
```

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

For details on branching and pull requests, see [docs/branching-strategy.md](branching-strategy.md) and [CONTRIBUTING.md](../CONTRIBUTING.md).
