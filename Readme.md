# Banao Assignment

This project is a basic authentication system developed using Node.js, Express, and MongoDB. It facilitates user registration, login, password reset functionalities, and CRUD operations for social media posts with likes and comments.

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

4. Environment Setup

To run this project, you will need to create a [`.env`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FE%3A%2Fbanao%20assignment%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "e:\\banao assignment.env") file in the root directory of the project. This file should contain the following environment variables:

```properties
MONGO_URI=<Your_MongoDB_URI>
JWT_SECRET=<Your_JWT_Secret>
PORT=<Your_Port_Number>
```

Here's how to obtain these values:

### MONGO_URI

- **Description**: This is the connection string to your MongoDB database.
- **How to Get**:
  1. Sign up or log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
  2. Create a new cluster or use an existing one.
  3. Navigate to the "Connect" section of your cluster.
  4. Choose "Connect your application".
  5. Copy the connection string provided and replace `<password>` with your database user's password, and `myFirstDatabase` with your database name if necessary.

### JWT_SECRET

- **Description**: A secret key used for signing and verifying JSON Web Tokens (JWT).
- **How to Get**:
  - You can generate a random string. This could be anything, but it's important that it's kept secret. For example, you could use an online tool like [RandomKeygen](https://randomkeygen.com/).

### PORT

- **Description**: The port number on which your server will listen.
- **How to Get**:
  - You can choose any available port number. Common choices for development are `3000`, `5000`, or `8000`. Ensure the port you choose is not already in use on your system.

After obtaining these values, replace `<Your_MongoDB_URI>`, `<Your_JWT_Secret>`, and `<Your_Port_Number>` in the `.env` file with your actual values.

5. Launch the development server:

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

### Create Post

- **Endpoint**: `{backend-url}/api/posts`
- **Method**: `POST`
- **Headers**:
  - Authorization: Bearer `<token>`
- **Body** (raw, JSON):

  ```json
  {
    "content": "<content>"
  }
  ```

### Get All Posts

- **Endpoint**: `{backend-url}/api/posts`
- **Method**: `GET`

### Get Post by ID

- **Endpoint**: `{backend-url}/api/posts/:id`
- **Method**: `GET`

### Update Post

- **Endpoint**: `{backend-url}/api/posts/:id`
- **Method**: `PUT`
- **Headers**:
  - Authorization: Bearer `<token>`
- **Body** (raw, JSON):

  ```json
  {
    "content": "<updated content>"
  }
  ```

### Delete Post

- **Endpoint**: `{backend-url}/api/posts/:id`
- **Method**: `DELETE`
- **Headers**:
  - Authorization: Bearer `<token>`

### Like Post

- **Endpoint**: `{backend-url}/api/posts/:id/like`
- **Method**: `POST`
- **Headers**:
  - Authorization: Bearer `<token>`

### Add Comment to Post

- **Endpoint**: `{backend-url}/api/posts/:id/comments`
- **Method**: `POST`
- **Headers**:
  - Authorization: Bearer `<token>`
- **Body** (raw, JSON):

  ```json
  {
    "text": "<comment text>"
  }
  ```

Replace `<username>`, `<email>`, `<password>`, `<content>`, `<updated content>`, and `<comment text>` with actual values when testing the endpoints.
