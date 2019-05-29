# TypeScript/JavaScript Comparison

## Table of Contents
- [About](#about)
  - [Overview](#overview)
  - [Questions](#questions)
  - [Findings](#findings)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Documentation](#documentation)

## About
This project includes TypeScript and JavaScript implementations of a 'simple' Web Component, as well as a 'complex' Web Component. Additionally, this project includes minimal build processes that allow for both the TypeScript and JavaScript-based Web Components to be bundled for use in the browser.

### Questions
The purpose of this repository is to explore the following:
- Is it possible to write a Web Component using *only* ES5-style JavaScript.
- What tooling is required in order to use an ES6+-based Web Component in the browser?
- What tooling is required in order to use a TypeScript-based Web Component in the browser?
- What blockers existing when attempting to develop Web Components using ES6+-style JavaScript?
- What blockers existing when attempting to develop Web Components using TypeScript?
- Is a JavaScript artifact generated from a TypeScript codebase larger than an artifact generated from the corresponding ES6+-style JavaScript codebase.

### Findings
- It is *not* possible to write a Web Component using *only* ES5-style JavaScript.
- When transpiling ES6+-based Web Components for use in the browser, the following tooling is required:
  - A 'module bundler', such as Webpack.
  - A transpiling tool, such as Babel.
- When transpiling TypeScript-based Web Components for use in the browser, the following tooling is required:
  - The TypeScript compiler.
  - A 'module bundler', such as Webpack.
- As the TypeScript compiler is able to transpile to ES5, supplementary transpiling tools (such as Babel) may not be required.
- When writing Web Components using ES6+-style JavaScript, there do not appear to be any obvious blockers or issues.
- When writing Web Components using TypeScript, the following blockers and constraints should be taken into consideration:
  - Type definitions may not exist for supporting tools, modules, or libraries.

## Prerequisites
In order to run this project, please ensure that both Node and npm are installed on your system.

## Installation
To install this project, as well as its dependencies, complete the following steps:
- Download or clone the repository to your local file system.
- Using the command line, navigate to the root of the repository.
- Run `npm install`.

## Usage
To view the TypeScript and JavaScript Web Components 'in situ' (ie. in a browser environment), open the following files the browser of your choice.
- `/src/typescript/demo/index.html`
- `/src/javascript/demo/index.html`

To compare the size of the minified and unminified TypeScript and JavaScript artifacts, complete the following steps:
- Using the command line, navigate to the root of the repository.
- Run the following command:
  - `ls -lh src/**/dist/bundle*`

This will display the name, location, and file size (in KB) of each bundle.

## Documentation
Currently, this project does not include any external documentation.

For an overview of the project's evolution, please consult the CHANGELOG.
