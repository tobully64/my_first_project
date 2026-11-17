# Smart Team Task Manager
## Initial API Contract

### 1. Project Resources

The main modules of the project are:

- Auth: Authentication and authorization
- Users: User management
- Tasks: Task management
- Reports: Report management
- Notifications: Notification management

### 2. Tasks Endpoints

| Method | Endpoint | Description | Status Codes |
|---|---|---|---|
| GET | /api/tasks | Get all tasks | 200, 500 |
| GET | /api/tasks/:id | Get a task by ID | 200, 404, 500 |
| POST | /api/tasks | Create a new task | 201, 400, 500 |
| PUT | /api/tasks/:id | Update a task | 200, 400, 404, 500 |
| DELETE | /api/tasks/:id | Delete a task | 200, 404, 500 |

### 3. Users Endpoints

| Method | Endpoint | Description | Status Codes |
|---|---|---|---|
| GET | /api/users | Get all users | 200, 500 |
| GET | /api/users/:id | Get a user by ID | 200, 404, 500 |
| POST | /api/users | Create a new user | 201, 400, 500 |
| PUT | /api/users/:id | Update a user | 200, 400, 404, 500 |
| DELETE | /api/users/:id | Delete a user | 200, 404, 500 |

### 4. HTTP Status Codes

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

### 5. Software Architecture

The project uses a Modular Monolith architecture.

```mermaid
flowchart TD
    A[User] --> B[Front-End]
    B --> C[REST API]
    C --> D[Back-End]
    D --> E[Auth Module]
    D --> F[Users Module]
    D --> G[Tasks Module]
    D --> H[Reports Module]
    D --> I[Notifications Module]
    D --> J[(Database)]
