1. Test Cases

Test ID| Test Description| Expected Result
TC01| Send GET request to "/"| Return status 200
TC02| Send GET request to "/api/tasks"| Return status 200 and list of tasks
TC03| Create a task with a valid title| Return status 201 and create the task
TC04| Create a task without a title| Return status 400
TC05| Get all tasks after creating a new task| Return status 200 and include the new task
## 2. CI/CD Pipeline

```mermaid
flowchart TD
    A[Write Code] --> B[Push to GitHub]
    B --> C[Install Dependencies]
    C --> D[Run Tests]
    D --> E{Tests Passed?}
    E -->|Yes| F[Build Docker Image]
    F --> G[Deploy Application]
    E -->|No| H[Pipeline Failed]
    H --> I[Fix Errors]
    I -->A
3. Test Failure Stage

Test failure occurs during the Test stage.

If any test fails, the pipeline stops. The Docker image will not be built and the application will not be deployed until the errors are fixed and all tests pass.
4. Relationship Between CI/CD and Docker

CI/CD automates the process of testing, building, and deploying the application.

Docker provides a consistent environment for running the application.

After all tests pass, the CI/CD Pipeline can build a Docker Image and use it to deploy the application.

Conclusion

Testing helps find bugs and improve software quality. CI/CD automates the development and deployment process, while Docker provides a consistent environment for running the application.
