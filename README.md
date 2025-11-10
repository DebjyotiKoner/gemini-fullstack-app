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
 │   ├── src/
 │   │    ├── routes/
 │   │    ├── controllers/
 │   │    ├── app.js
 │   │    └── server.js
 │   ├── package.json
 │   ├── Dockerfile
 │   └── README.md
 ├── frontend/
 │   ├── src/
 │   ├── public/
 │   ├── package.json
 │   ├── Dockerfile
 │   └── README.md
 ├── docker-compose.yaml
 ├── README.md
 └── .gitignore
```

## How to Run Locally

### Prerequisites

- Node.js
- npm

### Backend

```bash
cd backend
npm install
npm start
```

The backend will be running on `http://localhost:5000`.

### Frontend

```bash
cd frontend
npm install
npm start
```

The frontend will be running on `http://localhost:3000`.

## Docker Setup

### Prerequisites

- Docker
- Docker Compose

### Build and Run

To build and run the application with Docker Compose, run the following command from the root directory:

```bash
docker-compose up --build
```

- The frontend will be accessible at `http://localhost:3000`.
- The backend will be accessible at `http://localhost:5000`.

## CI/CD with Jenkins and EC2

This section describes how to set up a CI/CD pipeline with Jenkins on an AWS EC2 instance.

### EC2 Setup

1.  **Launch an EC2 Instance**:
    -   Choose an Ubuntu AMI.
    -   Select an instance type (e.g., `t2.micro`).
    -   Configure security groups to allow traffic on ports 22 (SSH), 80 (HTTP), 8080 (Jenkins), 3000 (Frontend), and 5000 (Backend).
2.  **Install Docker and Docker Compose**:
    -   SSH into your EC2 instance.
    -   Follow the official Docker documentation to install Docker Engine and Docker Compose.
3.  **Install Jenkins**:
    -   Follow the official Jenkins documentation to install Jenkins for Ubuntu.

### Jenkins Configuration

1.  **Access Jenkins**: Open your browser and navigate to `http://<your-ec2-ip>:8080`.
2.  **Unlock Jenkins**: Get the initial admin password by running `sudo cat /var/lib/jenkins/secrets/initialAdminPassword` on your EC2 instance.
3.  **Install Suggested Plugins**: Install the suggested plugins.
4.  **Create Admin User**: Create your admin user.
5.  **Configure Credentials**:
    -   **GitHub**:
        -   Go to `Manage Jenkins` > `Credentials` > `System` > `Global credentials`.
        -   Add a new credential of type `Username with password` for your GitHub account.
    -   **Docker Hub/ECR**:
        -   If you are pushing images to a container registry, configure credentials for Docker Hub or AWS ECR.

### Jenkins Pipeline

1.  **Create a New Pipeline**:
    -   On the Jenkins dashboard, click `New Item`.
    -   Enter a name for your pipeline (e.g., `fullstack-app-pipeline`).
    -   Select `Pipeline` and click `OK`.
2.  **Configure the Pipeline**:
    -   In the `Pipeline` section, select `Pipeline script from SCM`.
    -   **SCM**: `Git`.
    -   **Repository URL**: Your GitHub repository URL.
    -   **Credentials**: The GitHub credentials you configured.
    -   **Branch Specifier**: `*/main`.
    -   **Script Path**: `Jenkinsfile`.
3.  **Save and Build**: Save the pipeline configuration and click `Build Now` to run the pipeline.

## GitHub Integration

### Branch Structure

-   **main**: The main branch, representing the production-ready code.
-   **dev**: The development branch for new features and bug fixes.

### Pushing the Application

1.  Initialize a Git repository in the root directory: `git init`.
2.  Create a `.gitignore` file.
3.  Add and commit your code.
4.  Create a new repository on GitHub.
5.  Add the GitHub repository as a remote: `git remote add origin <your-repo-url>`.
6.  Push your code to the `dev` branch: `git push -u origin dev`.
7.  When ready to deploy, merge the `dev` branch into `main` and push to `main`.
