# eBuddy Test

This Turborepo-based project contains the **eBuddy Test** application, including both frontend and backend implementations. The frontend is built with **Next.js**, while the backend is developed using **Express.js**. **Turbo** is used for efficient monorepo management.

## What's Inside?

This repository includes the following applications:

### Apps and Packages

- `apps/frontend`: A [Next.js](https://nextjs.org/) application
- `apps/backend`: An [Express.js](https://expressjs.com/) backend API
- `@ebuddy/config`: Shared configuration settings
- `@ebuddy/eslint-config`: Shared ESLint configuration

Each package/app is fully developed using **TypeScript**.

## Requirements

Ensure you have the following installed before running the project:

- **Node.js** (Latest LTS recommended)
- **npm** or **yarn** for package management
- **Turbo** for monorepo management

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/MuhammadAliffandy/ebuddy-test.git
cd ebuddy-test
npm install  # or yarn install
```

## Running the Project

To develop all apps and packages, run the following command:

```sh
npm run dev  # or yarn dev
```

Alternatively, you can start each app individually:

### Running the Backend

```sh
cd apps/backend
npm run dev  # or yarn dev
```

### Running the Frontend

```sh
cd apps/frontend
npm run dev  # or yarn dev
```

## Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables:

```
# Backend
PORT=5002
DATABASE_URL=your_database_url

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Build

To build all apps and packages, run:

```sh
npm run build  # or yarn build
```

## Enviroment
you can set .env early to launch the program

Frontend
```sh
# API URLs
BASE_URL=
BASE_URL_DEV=
NODE_ENV=

# Firebase Configuration
FB_API_KEY=
FB_AUTH_DOMAIN=
FB_PROJECT_ID=
FB_STORAGE_BUCKET=
FB_MESSAGING_SENDER_ID=
FB_APP_ID=
FB_MEASUREMENT_ID=
```
Backend
you must adding env for backend in backend and functions folder

```sh
SECRET_KEY =
FB_PRIVATE_KEY_ID=
FB_PRIVATE_KEY=
FB_CLIENT_EMAIL=
FB_CLIENT_ID=
FB_AUTH_URI=
FB_TOKEN_URI=
FB_AUTH_PROVIDER_X509_CERT_URL=
FB_CLIENT_X509_CERT_URL=
FB_UNIVERSE_DOMAIN=

```

## Technologies Used

- **Next.js** - React framework for frontend development
- **Express.js** - Backend API framework
- **Turbo** - Monorepo management tool
- **TypeScript** - Static typing for JavaScript


