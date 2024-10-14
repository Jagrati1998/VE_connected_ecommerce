



# Nexcent User UI

This project is Nexcent, built using User Interface build using React and tailwind CSS



---

## Installation








   
## Normal  Installation
### Prerequisites

- Node.js (>= 14.x)
- NVM
### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/Jagrati1998/VE_connected_ecommerce.git
    cd VE_connected_ecommerce
    cd frontend
    ```

2. Install Fronend dependencies:

    ```bash
   
    npm install --force
    ```

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
   cd frontend
   docker compose up -d
   
   ``````

## Normal Installation
2. Start the production servers:

    - Frontend: Run the following from the `frontend` directory:

      ```bash
      npm run build
      npm install -g serve
      serve -s build

      ```
3. Start the development servers:

    - Frontend: Run the following from the `frontend` directory:

      ```bash
      npm run build
      npm start
    ``````


4. Access the API at `http://localhost:3000`. // port configure in env
