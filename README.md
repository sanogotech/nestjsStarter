# nestjsStarter
nestJS Starter.

**NestJs** reduces a lot of the time wasted tinkering on directories structure, setting up tests, routes, database connections and so on, everything is solved for the average use case.

**The Nest CLI** is a command-line interface tool that helps you to initialize, develop, and maintain your Nest applications. It assists in multiple ways, including scaffolding the project, serving it in development mode, and building and bundling the application for production distribution. It embodies best-practice architectural patterns to encourage well-structured apps.

** NestJs  RedHat Sponsor



## Docs
- https://itnext.io/crud-api-in-3-lines-using-nestjs-692df3d61160
- https://docs.nestjs.com/cli/overview
- https://betterprogramming.pub/nestjs-challenge-take-the-basic-steps-and-start-developing-a-rest-api-5401b234d834

##  Install Nodejs and NestJS
```
* https://nodejs.org/en/download/
$  node -v
$  npm -v
$  npm install typescript --save-dev
$  npx  tsc  file.ts  orr  tsc  file.ts

$ npm install -g @nestjs/cli
$ nest --help
$ nest generate --help
```
## TOP  nest commands
   * nest   new  project
   * nest   generate resource or module or controller or service
   * nest  add  lib
   * nest  info 
## CRUD API in 3 lines using NestJS
* Create project
```
  nest  new  myproject
  cd myproject
  npm  run start:dev
  run:  localhost:3000
```

```
nest   generate resource  tutorial

nest g module tutorial

nest g controller tutorial

nest g service tutorial

```
## NestJs StandardMode(tsc)  vs MonoMod(webpack)

