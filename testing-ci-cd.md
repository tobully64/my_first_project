Testing and CI/CD

1. Test Cases

Test ID| Method| Endpoint| Expected Result
TC01| GET| "/"| Status Code 200
TC02| GET| "/api/tasks"| Status Code 200 and task list
TC03| POST| "/api/tasks"| Status Code 201 and task created
TC04| POST| "/api/tasks"| Status Code 400 when title is missing
TC05| GET| "/api/tasks"| Status Code 200 and newly created task appears

2. CI/CD Pipeline

Write Code
    |
Push to GitHub
    |
Install Dependencies
    |
Run Tests
    |
Tests Passed?
   /     \
 Yes     No
  |       |
Build   Fix Errors
Docker    |
Image   Run Tests Again
  |
Deploy

3. Test Failure Stage

If a test fails, the failure occurs during the Test Stage. The pipeline stops and does not continue to Docker Build or Deployment until the errors are fixed.

4. Relationship Between CI/CD and Docker

CI/CD automates testing, building, and deployment. Docker packages the application and its dependencies into a container. After tests pass, the pipeline can build a Docker image and prepare the application for deployment.

Conclusion

Testing helps find errors. CI/CD automates the development process, and Docker provides a consistent environment for running the application.
