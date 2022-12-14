# Bravocare backend assessment

## Objective
Creation of an API capable of interacting with a [PostgreSQL](https://www.postgresql.org/) database and provide data regarding the health area (shifts of nurses, facilities, etc) to a front-end application.

## Dependencies

These are libraries that gives the developer tools to deal with specific situations.

- [Express.js](https://expressjs.com/pt-br/): Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [Dotenv](https://www.npmjs.com/package/dotenv): Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
- [Postgres](https://www.npmjs.com/package/postgres): The most simple way of making contact with a PostgreSQL database from a back-end application.
- [Cors](https://www.npmjs.com/package/cors): CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

## Dev dependencies

These are libraries meant to help **only** during the development.

- [Typescript](https://www.typescriptlang.org/): TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Nodemon](https://www.npmjs.com/package/nodemon): nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Getting started

First, it's important to create a similar file to the .env.example to store some sensitive data, such as: database passwords, database's username and the name of the database. Create a **.env** file and copy each variable contained in .env.example. After that assign new values according to your connection with the database.

### Running the project

First you need to install the dependencies of the project by running this command on the shell:

```bash
npm install
```

```bash
npm run dev
```
## API Routes

- *localhost:3001/shifts*: It brings from the db all shifts.
- *localhost:3001/shifts/overlap*: It calculates the overlap between two shifts. Requires two query parameters (firstShift, secondShift). *Ex: localhost:3001/shifts/overlap?firstShift=1&secondShift=3*
- *localhost:3001/remaining-spots*: It brings the remaining spots that each facility has for each job type.
- *localhost:3001/jobs-left*: It brings the total number of jobs that each nurse can still get hired for.
- *localhost:3001/co-workers*: Fetches all co-workers from a person given his/her name and the facility he's/she's working. Accepts two query parameters (facilityName, nurseName). *Ex: localhost:3001/co-workers?facilityName=Facility&nurseName=Joaquim*

## Stay in touch

- Author: [Ivan Valverde](https://github.com/ivanvalverde)
- E-mail: ivanvalverde53@hotmail.com



