# xq-js-common-kit

A focused collection of lightweight JavaScript utilities for use across multiple projects.

[![Build & Publish](https://github.com/chauhaidang/xq-js-common-kit/actions/workflows/publish.yml/badge.svg)](https://github.com/chauhaidang/xq-js-common-kit/actions/workflows/publish.yml)
[![codecov](https://codecov.io/gh/chauhaidang/xq-js-common-kit/branch/main/graph/badge.svg?token=YOUR_CODECOV_TOKEN)](https://codecov.io/gh/chauhaidang/xq-js-common-kit)

---

## ✨ Overview

This kit provides minimal, dependency-friendly helpers for tasks like:

- Reading YAML files
- Generating random strings
- Centralized configuration management
- Structured logging with multiple levels

Designed for easy inclusion in any JavaScript project without heavy coupling.

---

## 🚀 Quick Start

Install dependencies:

```sh
npm install
```

Run tests:

```sh
npm test
```

Lint the codebase:

```sh
npm run lint
```

Auto-fix lint issues:

```sh
npm run lint:fix
```

Build (syntax-check + tests):

```sh
npm run build
```

---

## 📦 Usage Example

```js
const { readYAML, generateRandomString, getConfig, logger } = require('@chauhaidang/xq-js-common-kit')

// Read YAML file
const data = readYAML('xq.yaml')
console.log(data)

// Generate a random string
console.log(generateRandomString(8))

// Access config
console.log(getConfig().someKey)

// Logging
logger.info('Application started')
logger.error('Something went wrong')
logger.debug('Debug information')
```

---

## 📝 Logger

The logger module provides structured logging with multiple levels and colored output.

### Log Levels
- `DEBUG` (0) - Detailed debug information
- `INFO` (1) - General information messages
- `WARN` (2) - Warning messages
- `ERROR` (3) - Error messages

### Usage

```js
const { logger } = require('@chauhaidang/xq-js-common-kit')

// Basic logging
logger.info('Server started on port 3000')
logger.warn('Memory usage is high')
logger.error('Database connection failed')
logger.debug('Processing user request')

// Multiple arguments
logger.info('User logged in:', { userId: 123, email: 'user@example.com' })

// Configure log level (only logs at or above this level)
logger.setLevel('WARN')  // Only WARN and ERROR messages will be shown
logger.setLevel('DEBUG') // All messages will be shown
```

### Output Format
```
[2025-09-23T10:30:45.123Z] INFO: Server started on port 3000
[2025-09-23T10:30:46.456Z] ERROR: Database connection failed
```

---

## 🛠️ Scripts

- `npm test` — Run Jest test suite
- `npm run lint` — Run ESLint
- `npm run lint:fix` — Auto-fix lint issues
- `npm run build` — Syntax check & run tests
- `npm start` — Run main.js

---

## 🚚 Publishing

This project uses GitHub Actions to automate publishing to GitHub Packages.

**Publishing occurs when:**
- The version in `package.json` changes (compared to the previous commit on `main`)
- Or the workflow is manually triggered from GitHub Actions

**How it works:**
- On every push to the `main` branch, the workflow checks if the version in `package.json` has changed.
- If the version changed, the package is published to GitHub Packages (`npm.pkg.github.com`).
- You can also manually trigger the workflow from the GitHub Actions tab.
- Authentication uses the built-in `GITHUB_TOKEN` secret (no need for an npm token).

**Release flow:**

1. Bump the version in `package.json`:
   ```sh
   npm version <new-version> --no-git-tag-version
   ```
2. Commit and push to `main`:
   ```sh
   git add package.json package-lock.json
   git commit -m "chore(release): <new-version>"
   git push origin main
   ```
3. The workflow will detect the version change and publish automatically.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for bugs and enhancements.

---

## 📄 License

Apache-2.0
