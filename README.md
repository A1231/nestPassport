## Description

A NestJS authentication implementation using Passport.js with **Local** and **JWT** authentication strategies. This project demonstrates how to implement secure authentication in a NestJS application with protected routes, guards, and token-based authentication.

### Features

- 🔐 **Local Authentication Strategy** - Username/password based authentication
- 🎫 **JWT Authentication Strategy** - Token-based authentication for protected routes
- 🛡️ **Authentication Guards** - Protect routes with `LocalAuthGuard` and `JwtAuthGuard`
- 👤 **User Management** - User service for managing user data
- 🔒 **Secure Token Generation** - JWT tokens for stateless authentication

### Authentication Flow

1. **Login**: Users authenticate with username/password using the local strategy
2. **Token Generation**: Upon successful authentication, a JWT access token is generated
3. **Protected Routes**: Use the JWT token in the Authorization header to access protected endpoints

### Project Structure

```
src/
├── auth/              # Authentication module
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── local.strategy.ts      # Local (username/password) strategy
│   ├── jwt.strategy.ts        # JWT token validation strategy
│   ├── local-auth.guard.ts    # Guard for local authentication
│   ├── jwt-auth.guard.ts      # Guard for JWT protected routes
│   └── constants.ts           # JWT secret (excluded from git)
├── users/             # User management module
│   ├── users.module.ts
│   └── users.service.ts
└── httpEndpoints/     # HTTP request examples
    ├── login.http
    └── profile.http
```

### Important Notes

- The `constants.ts` file containing JWT secrets is excluded from version control (see `.gitignore`)
- Make sure to set a strong JWT secret in production
- This is a starter template - enhance user validation and password hashing for production use

## API Endpoints

### Authentication

**POST** `/auth/login`
- Authenticate with username and password
- Returns a JWT access token
- Request body:
  ```json
  {
    "username": "john",
    "password": "changeme"
  }
  ```
- Response:
  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

### Protected Routes

**GET** `/profile`
- Get user profile (requires authentication)
- Requires JWT token in Authorization header
- Header: `Authorization: Bearer <your-jwt-token>`
- Returns the authenticated user object

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash

# watch mode
$ npm run start:dev


```

