Testing and CI/CD

1. Test Cases

| Test ID | Test Description | Expected Result |
|---|---|---|
| TC01 | Send GET request to `/` | Return status 200 |
| TC02 | Get all tasks from `/api/tasks` | Return status 200 and list of tasks |
| TC03 | Create a task with a valid title | Return status 201 and create the task |
| TC04 | Create a task without a title | Return status 400 |
| TC05 | Get all tasks after creating a new task | Return status 200 and include the new task |

2. CI/CD Pipeline

flowchart TD
    A[Code] --> B[Build]
    B --> C[Test]
    C --> D{Tests Passed?}
    D -->|Yes| E[Build Docker Image]
    E --> F[Deploy]
    D -->|No| G[Pipeline Failed]
    G --> H[Fix the Code]
    H --> A

3. Test Failure Stage

If any test fails during the Test stage, the CI/CD Pipeline stops.

The Docker image will not be built, and the application will not be deployed until the errors are fixed and all tests pass.

4. Relationship Between CI/CD and Docker

Docker creates a consistent environment for running the application.

The CI/CD Pipeline can automatically build a Docker image after successful tests. This makes application deployment faster and more reliable.

Conclusion

Testing helps detect errors, CI/CD automates the development and deployment process, and Docker provides a consistent environment for running the application.
