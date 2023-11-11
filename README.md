<!--

GENERAL REPO COMMENTS:

SUGGESTION: Update the README.md file
why: This is the entrypoint into your application for other developers, it will help them setup the app and avoid bugs.
what:
- A description of the application
- Instructions to get the application up and running
- A link to the deployed application
nice to haves:
- Blockers reached during development and how they were overcome (Recruiters like this)

SUGGESTION: Use Docker containers for external services like postgres
why: Not everyone wants to mess with the local postgres on their machine and have it conflict with other apps they work on
what:
- Create a docker-compose.yml file with the postgres image
- Use docker-compose -d to spin up a postgres container on the defined port
- here is a link to the docker docs: https://docs.docker.com/
- here is a link to the docker-compose docs: https://docs.docker.com/compose/
- here is a great tutorial for future reference: https://medium.com/@agusmahari/docker-how-to-install-postgresql-using-docker-compose-d646c793f216

SUGGESTION: Use a linter
why: Linters help you write better code and avoid bugs, they auto save and format to make code more readable
what:
- Something like eslint for a javascript project
- here is a great guide about linters: https://blog.logrocket.com/deep-dive-linting-in-node/
- here is a link to the eslint docs: https://eslint.org/docs/user-guide/getting-started
- AirBnB uses some really strict javascript formatting to avoid errors, here is a link on how to implement it: https://www.makeuseof.com/eslint-with-airbnb-javascript-style-guide/

SUGGESTION: Use a testing framework
why: Testing frameworks help you write better code and avoid bugs. They also help you write code that is more modular and easier to maintain since breaking changes break tests.
what:
- Something like jest for a javascript project
- here is a great guide about testing express apps: https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/
- here is a link to the jest docs: https://jestjs.io/docs/en/getting-started

SUGGESTION: Use an ORM
why: ORMs help you by avoiding writing raw SQL and instead write javascript code that is translated into SQL
what:
- Something like prisma for a javascript project
- here is a great guide about prisma: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-node-postgresql
-->

# Express Skeleton

This is a skeleton for a backend web application using Express.js. It is intended to be used as a starting point for new projects. It is not intended to be a production-ready application.

## Using the Skeleton

1. Fork the repository on GitHub.

1. Clone the repository to your local machine.

   ```bash
   git clone <repository-url> <directory-name>
   # Example: git clone https://github.com/9-5-pursuit/express-skeleton my-app-backend
   ```

1. Change into the directory.

   ```bash
   cd <directory-name>
   # Example: cd my-app-backend
   ```

1. Setup a new remote repository on Github so that you don't overwrite the skeleton repository.

1. Link your local repository to your new remote repository.

   ```bash
   git remote set-url origin <new-repository-url>
   ```

1. Make a small change, then create a new commit to test the remote repository.

   ```bash
   git add .
   git commit -m "Update remote repository"
   git push
   ```

## Express Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Package manager

### Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

> Note: The development server will restart automatically when changes are made to the source code as long as you use Nodemon to start the server and leave the server running. If you stop the server, you will need to restart it manually. We've setup a script in the `package.json` file to make this the default behavior when you run `npm run dev`.

### Built With

- [Express](https://expressjs.com/) - Web framework
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variables
- [nodemon](https://nodemon.io/) - Development server
- [cors](https://www.npmjs.com/package/cors) - Cross-origin resource sharing
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger

### Additional Notes

Since this is a skeleton, the `.env` file is included in the repository. This is not recommended for production applications. The `.env` file should be added to the `.gitignore` file and the environment variables should be set in the production environment.
