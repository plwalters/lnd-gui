# LND-GUI

**NOTE: This package is currently in early development.  The commands on this page and this package should only be used by users who understand what they are installing and how to run local packages from the terminal / command line**

Providing a simple user interface on top of the `lnd` gRPC methods.  Barebones project not meant to function as a wallet with good UX, just provide a basic user interface to replicate the `lncli`

**Issues** are found in the issues tab in the GitHub repo.

## Overview

This project is a client-side application that runs in the browser.  It can be found in the `client` directory.

The front-end itself is written in [Aurelia](https://github.com/aurelia) to keep as simple to Modern JavaScript as possible with limited amount of framework-specific code.

The project makes HTTP calls to the `ln-service` project, running as a node.js RESTful API.  Under the covers it uses the gRPC interface to interact with LND, via macaroons.

## Large dependencies

- **[ln-service](https://github.com/alexbosworth/ln-service/)** -

## Pre-requisites

- node and npm (Project verified on node@8.9.1 and npm@5.5.1)

**Until an official release is available please make sure to have some additional build tooling available on your command line**

- [gulp](https://github.com/gulpjs/gulp) - Build tooling for client-side app
- [jspm](https://github.com/gulpjs/jspm) - Package manager for client-side app

These can be installed globally as such, from any directory -

```
$ npm install gulp -g
$ npm install jspm -g
```

## Installation

For now there are no distributions available and this package must be `git clone`d.

### Git

Obviously, ensure you have git installed before attempting this.

```
$ git clone https://github.com/PWKad/lnd-gui.git
$ cd lnd-gui
$ npm install
```

### Configuring ln-service

ln-service requires a few environment variables to run.  You can see a list of them in the following link  -

[Configuring Environment Variables](https://github.com/alexbosworth/ln-service/#configuring-environment-variables)

## Running the app

The most simple way to run the app is using the native `http-server` package.

From the root of the project directory ()
```
$ cd
```

## Credits

Thanks to https://github.com/chemicstry/recksplorer and https://github.com/mably/lncli-web for `lightning.js` grpc wrapper.

## Tests

TODO
