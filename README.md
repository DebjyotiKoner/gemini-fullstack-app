# Full-Stack Application with CI/CD

This project is a full-stack web application with a React frontend and a Node.js/Express backend. It is designed to be containerized with Docker and deployed with a CI/CD pipeline using Jenkins on an AWS EC2 instance.

## Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: In-memory (no real database)
- **Containerization**: Docker, Docker Compose
- **CI/CD**: Jenkins

## Project Structure

```
root/
 ├── backend/
 ├── frontend/
 ├── docker-compose.yaml
 ├── Jenkinsfile
 ├── README.md
 └── .gitignore
```

## Usage

### Local Development

To run the application on your local machine, you need Node.js and npm installed.

**1. Run the Backend:**

```bash
cd backend
npm install
npm start
```

The backend will be running on `http://localhost:5000`.

**2. Run the Frontend:**

```bash
cd frontend
npm install
npm start
```

The frontend will be running on `http://localhost:3000`. The frontend will proxy API requests to the backend.

### Docker Build and Deploy

To build and run the application with Docker, you need Docker and Docker Compose installed.

**1. Build and Run:**

From the root directory, run:

```bash
docker-compose up --build -d
```

This command will build the Docker images for the frontend and backend and start the containers in detached mode.

- The frontend will be accessible at `http://localhost:3000`.
- The backend will be accessible at `http://localhost:5000`.

**2. Stop the Application:**

To stop the application, run:

```bash
docker-compose down
```

## CI/CD Workflow

This project is configured for a CI/CD workflow using Jenkins. The `Jenkinsfile` in the root directory defines the pipeline.

**Pipeline Stages:**

1.  **Checkout**: Checks out the code from the source control repository.
2.  **Install Dependencies**: Installs npm dependencies for both the frontend and backend.
3.  **Build Frontend**: Builds the production version of the frontend.
4.  **Docker Build**: Builds the Docker images for the frontend and backend services using `docker-compose`.
5.  **Deploy**: Stops any running containers and starts the new version using `docker-compose`.

**Triggering the Pipeline:**

The pipeline is expected to be triggered by a webhook from a Git repository (e.g., GitHub) when changes are pushed to the `main` branch.