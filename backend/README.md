



# E-Commerce Management API

This project is an e-commerce management API, built using a MERN stack (MongoDB, Express, React, Node.js) with options for RESTful. It provides functionality to manage users, products, and orders.

## Features

- User registration and authentication (JWT-based).
- Product management (CRUD operations).
- Order management (CRUD operations).
- RESTful API


## Tech Stack


- **Backend**: Node.js (Express)
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **API Access**: REST


---

## Installation

## Docker Installation

This project can be easily set up using Docker. Follow the steps below to get started:

### Prerequisites

Make sure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started) - Version 20.10 or later
- [Docker Compose](https://docs.docker.com/compose/install/) - Version 1.27 or later





### Build and Run the Application

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Jagrati1998/VE_connected_ecommerce.git
   cd VE_connected_ecommerce
   cd backend
   docker compose up -d
   
   ``````
   
## Normal  Installation
### Prerequisites

- Node.js (>= 14.x)
- MongoDB (>= 4.x)
- Postman (optional, for API testing)

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/Jagrati1998/VE_connected_ecommerce.git
    cd VE_connected_ecommerce
    ```

2. Install backend dependencies:

    ```bash
    cd backend
    npm install --force
    ```

5. Start the development servers:

    - Backend: Run the following from the `backend` directory:

      ```bash
      npm run dev
      ```

6. Access the API at `http://localhost:5000/api`.
## Docs Access

   http://localhost:5000/api-docs   # Port defined in backend env 
// or port configure in env
---

## Token Generation

### User Registration

To register a new user:

1. Send a `POST` request to `/users` with the following body parameters:

    ```json
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "password": "yourpassword"
    }
    ```

2. Upon successful registration, you will receive a response with a JWT token:

    ```json
    {
      "token": "your_jwt_token"
    }
    ```

### Token-Based Authentication


    ```json
    {
      "token": "your_jwt_token"
    }
    ```

3. Use this token for authenticated requests by including it in the `Authorization` header:

    ```bash
    Authorization: Bearer your_jwt_token
    ```

---


  

### RESTful API

You can access the RESTful API at the following base URL:

