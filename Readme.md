# Banao Assignment

This project is a basic authentication system developed using Node.js, Express, and MongoDB. It facilitates user registration, login, and password reset functionalities.

## Prerequisites

Ensure Node.js is installed on your system before proceeding. Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

## Installation

To set up this project locally, follow the steps below:

1. Clone the repository to your local machine or download the project files.
2. Open a terminal, navigate to the project's root directory:

   ```sh
   cd path/to/banao-assignment
   ```

3. Install the necessary dependencies:

   ```sh
   npm install
   ```

4. Launch the development server:

   ```sh
   npm run dev
   ```

## Testing the API Endpoints

Use Postman or another API testing tool to test the API endpoints.

### Register a New User

- **Endpoint**: `{backend-url}/api/auth/register`
- **Method**: `POST`
- **Body** (raw, JSON):

  ```json
  {
    "username": "<username>",
    "email": "<email>",
    "password": "<password>"
  }
  ```

### Login

- **Endpoint**: `{backend-url}/api/auth/login`
- **Method**: `POST`
- **Body** (raw, JSON):

  ```json
  {
    "username": "<username>",
    "password": "<password>"
  }
  ```

### Forgot Password

- **Endpoint**: `{backend-url}/api/auth/forgot-password`
- **Method**: `POST`
- **Body** (raw, JSON):

  ```json
  {
    "email": "<email>"
  }
  ```

Replace `<username>`, `<email>`, and `<password>` with actual user details when testing the endpoints.
