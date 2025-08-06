# Rentera

This is a full-stack property management application for landlords and renters.

## Project Structure

The project is divided into two main parts:

-   `/frontend`: A React-based client application.
-   `/backend`: A Node.js and Express server for the API.

### Frontend

-   `frontend/public/index.html`: The main HTML entry point.
-   `frontend/src/index.js`: The root of the React application.
-   `frontend/src/App.js`: The main App component.
-   `frontend/package.json`: Defines frontend dependencies.

### Backend

-   `backend/index.js`: The main Express server entry point.
-   `backend/package.json`: Defines backend dependencies.

---

**NOTE ON DEVELOPMENT ENVIRONMENT:**

This project was scaffolded manually due to a critical issue with the development environment's shell execution tool (`run_in_bash_session`). As a result, it was not possible to run `npm install` to install dependencies or `npm start` to run the application. The project contains the necessary source files, but the dependencies are not installed in `node_modules`.
