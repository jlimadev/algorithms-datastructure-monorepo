# Algorithms and Data-structure mono-repo

This repository aggregates some functions and algorithms repositories.

**This repo is under creation, while im studying some algorithms**

## Lerna

This mono-repo is managed by lerna and yarn workspaces, and you can use the following scripts to install all the dependencies

```bash
yarn
```

## Running all tests of all packages

```bash
lerna run test
```

## Installing dependencies from the same mono-repo

In the folder of the package you want to install the dependency, just run

```bash
lerna add <package_name>
```

For example, if you want to install the logging library, just run

```bash
lerna add logging
```

## Lambda Folder

This folder contains all functions used in this project.
Each Lambda should follow this structure:

```

└ .vscode → VSCode configuration to debug
└ src → core → Functions code
```

You can copy the structure from the samples.

## Husky

This repo uses `Husky` to guarantee the `commit` and `push` quality

Before any commit, the `husky` will run a `lint` check and before any `push` it will run a `test` check

Be sure to add the following scripts to the functions

```
  "husky:lint": "npx yarn install && yarn lint",
  "husky:test": "npx yarn install && yarn test:silent"
```

## Use Yarn instead of npm

To keep the package size as minimum as possible, use `yarn` instead of `npm install`.
