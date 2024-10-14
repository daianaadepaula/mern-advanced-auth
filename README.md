# MERN Advanced Authentication Application

This is a full-stack MERN (MongoDB, Express, React, Node.js) application focused on providing advanced authentication features, such as signup, login, email verification, password reset, and user role protection. The project includes backend APIs for user authentication and frontend components to interact with these APIs.

## Features

- **User Signup/Login**: Secure user registration and login using bcrypt for password hashing.
- **Email Verification**: New users must verify their email before accessing protected routes.
- **Password Reset**: Allows users to request a password reset link and change their password securely.
- **Protected Routes**: Only authenticated and verified users can access certain pages.
- **JWT Authentication**: User sessions are handled with JSON Web Tokens (JWT) and stored as cookies.

## Technologies

- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, Nodemailer, Mailtrap (for email)
- Frontend: React, Zustand for state management, Tailwind CSS for styling, React Router for navigation

## Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/mern-advanced-auth.git
   cd mern-advanced-auth
   ```

2. **Install dependencies for both frontend and backend:**

   ```bash
   npm run build
   ```

3. **Set up environment variables:**

   Create a .env file in the root directory with the following content:

   ```bash
   	NODE_ENV=development
   	PORT=5000
   	MONGO_URI=your_mongodb_uri
   	JWT_SECRET=your_jwt_secret
   	MAILTRAP_USER=your_mailtrap_user
   	MAILTRAP_PASS=your_mailtrap_pass
   	CLIENT_URL=http://localhost:5173
   ```

4. **Run the application in development mode:**

   ```bash
   npm run dev
   ```

This will start both the frontend and backend on different ports.

## Scripts

- **Development**: npm run dev — Starts the backend server with nodemon in development mode.
- **Production**: npm start — Starts the backend server in production mode.
- **Build**: npm run build — Installs dependencies and builds the frontend.

## API Routes

The following routes are available:

- **POST /api/auth/signup**: User registration.
- **POST /api/auth/login**: User login.
- **POST /api/auth/logout**: User logout.
- **POST /api/auth/verify-email**: Verify user's email.
- **POST /api/auth/forgot-password**: Send password reset link.
- **POST /api/auth/reset-password/:token**: Reset user password.
- **GET /api/auth/check-auth**: Check if a user is authenticated.

## Deployment

To deploy the app in a production environment:

1. **Build the frontend:**

   ```bash
   npm run build
   ```

2. **Run the app:**

   ```bash
   npm start
   ```

This will serve the backend and frontend as a single application.

## License

This project is licensed under the MIT License.
