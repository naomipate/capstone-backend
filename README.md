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
