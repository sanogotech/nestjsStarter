# nestjsStarter
nestJS Starter.

**NestJs** reduces a lot of the time wasted tinkering on directories structure, setting up tests, routes, database connections and so on, everything is solved for the average use case.

**The Nest CLI** is a command-line interface tool that helps you to initialize, develop, and maintain your Nest applications. It assists in multiple ways, including scaffolding the project, serving it in development mode, and building and bundling the application for production distribution. It embodies best-practice architectural patterns to encourage well-structured apps.

** NestJs  RedHat Sponsor



## Docs
-  https://www.sitepoint.com/typescript-vs-javascript/
- https://itnext.io/crud-api-in-3-lines-using-nestjs-692df3d61160
- https://docs.nestjs.com/cli/overview
- https://www.sidechannel.blog/en/creating-an-api-with-nestjs/
- https://blog.devsharma.live/nest-js-rest-api-tutorial
- https://arctype.com/blog/sqlite-nestjs-tutorial/
- https://betterprogramming.pub/nestjs-challenge-take-the-basic-steps-and-start-developing-a-rest-api-5401b234d834
- https://www.prisma.io/blog/nestjs-prisma-rest-api-7D056s1BmOL0
- https://progressivecoder.com/build-a-nestjs-prisma-rest-api/

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
*CRUD Generator all with
```
nest   generate resource  tutorial
```

nest g module tutorial

nest g controller tutorial

nest g service tutorial

```
## NestJs StandardMode(tsc)  vs MonoMod(webpack)

## Install Dependencies
```
Passport
Passport-local
Jwt
Passport-jwt
SQLIte3
TypeORM
Bcrypt


```

```
$ npm install --save @nestjs/passport passport passport-local @nestjs/jwt passport-jwt @nestjs/typeorm typeorm sqlite3 bcrypt

-- dev dependencies --
$ npm install --save-dev @types/passport-local @types/passport-jwt @types/bcrypt   

```

-- Dotenv  (.env)  at the root of the project ---
```
npm install --save @nestjs/config
```
*.env
```
SERVER_PORT=3000
MODE=DEV
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=
DB_DATABASE=shopping_list
DB_SYNCHRONIZE=true
```
## Prisma CLI: Database Modeling and Crud Generator

```
$ npm install prisma --save-dev
$ npm install @prisma/client

1. npx prisma init
2. npx prisma migrate dev --name init
```




