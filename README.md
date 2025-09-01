# xq-js-common-kit

A small, focused collection of JavaScript utilities and helpers used across projects.

[![Build and Publish](https://github.com/chauhaidang/xq-js-common-kit/actions/workflows/publish.yml/badge.svg)](https://github.com/chauhaidang/xq-js-common-kit/actions/workflows/publish.yml)

[![codecov](https://codecov.io/gh/chauhaidang/xq-js-common-kit/branch/main/graph/badge.svg?token=YOUR_CODECOV_TOKEN)](https://codecov.io/gh/chauhaidang/xq-js-common-kit)
## Overview

This repository provides lightweight, dependency-friendly utilities for common tasks such as:
- Reading YAML files
- Generating random strings
- Centralized configuration helpers

The kit is intentionally minimal so it can be included in other projects without heavy coupling.

## Quick start

Install dependencies:

```
npm install
```

Run tests:

```
npm test
```

Lint the codebase:

```
npm run lint
```

Run the build (syntax-check + tests):

```
npm run build
```

## Scripts

- `npm test` — run the Jest test suite
- `npm run lint` — run ESLint across the project
- `npm run lint:fix` — automatically fix lintable issues
- `npm run build` — check JS syntax and run tests

## Publishing

This project is set up with a CI workflow that builds and publishes packages when a git tag is pushed. Use numeric tags (e.g. `1.2.3`) to trigger the publish workflow in the current configuration.

Recommended release flow:

1. Bump the version without creating a tag:

   ```
   npm version <new-version> --no-git-tag-version
   ```

2. Commit changes and create a numeric git tag:

   ```
   git add package.json package-lock.json
   git commit -m "chore(release): <new-version>"
   git push
   ```

This will trigger CI to build and publish the package.

## Contributing

Contributions are welcome. Please open issues or pull requests for bug fixes and enhancements.

## License

APACHE-2.0
