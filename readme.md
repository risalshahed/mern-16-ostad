# Express JS ES6 Project Structure

## Clone the Github Repo
```bash
git clone https://github.com/risalshahed/mern-16-ostad.git
```

## Change to the Directory
```bash
cd mern-16-ostad
```

## Switch to the Branch
```bash
git switch module-16-express-es6
```

## Install & Run the Project

```bash
npm i
npm run dev
```

This project follows a simple and organized folder structure using **Express.js with ES6 Modules**.

## Request Flow

The main request flow of the application is:

**Request → Route → Controller → Service → Controller → Response**

### How it works

1. **Request** — Client sends a request to the server.
2. **Route** — Determines which controller should handle the request.
3. **Controller** — Receives the request and calls the appropriate service.
4. **Service** — Handles the application's business logic and data processing.
5. **Controller** — Receives the result from the service and prepares the response.
6. **Response** — Sends the final response back to the client.

---

## Project Structure

```text
project/
│
├── server.js
├── app.js
├── package.json
├── .env
│
├── routes/
│   └── user.routes.js
│
├── controllers/
│   └── user.controller.js
│
├── services/
│   └── user.service.js
│
└── middlewares/
    └── ...