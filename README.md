Smart Team Task Manager

A simple Node.js backend for managing team tasks.

Requirements

- Node.js
- Docker

Run with Docker

1. Build the Docker image

docker build -t smart-task-api .

2. Run the container

docker run -d -p 3000:3000 --name smart-task-api-container smart-task-api

3. Check running containers

docker ps

4. View container logs

docker logs smart-task-api-container

API Endpoints

Method| Endpoint| Description
GET| /| Check server status
GET| /api/tasks| Get all tasks
POST| /api/tasks| Create a new task

Test the API

Open the following address in your browser:

"http://localhost:3000"

To get all tasks, open:

"http://localhost:3000/api/tasks"
