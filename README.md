# NestJS Task Management API

A RESTful API for managing tasks, built with NestJS, TypeScript, PostgreSQL, and Docker. Includes CRUD operations, unit tests with Jest, and CI/CD with GitHub Actions.

## Features

- Create, read, update, and delete tasks
- PostgreSQL database with TypeORM
- Containerized with Docker
- Unit tests with Jest
- CI/CD pipeline with GitHub Actions
- TypeScript for type safety

## Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- npm
- Git

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/shari-ar/TaskNestAPI.git
   cd TaskNestAPI
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start PostgreSQL with Docker**:

   ```bash
   docker-compose up -d
   ```

4. **Set up environment variables**:
   Create a `.env` file in the root directory with the following:

   ```
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USERNAME=postgres
   DATABASE_PASSWORD=postgres
   DATABASE_NAME=taskdb
   ```

5. **Run the application**:

   ```bash
   npm run start:dev
   ```

   The API will be available at `http://localhost:3000`.

6. **Run tests**:
   ```bash
   npm run test
   ```

## API Endpoints

| Method | Endpoint     | Description           | Request Body Example                                         |
| ------ | ------------ | --------------------- | ------------------------------------------------------------ |
| GET    | `/tasks`     | Retrieve all tasks    | -                                                            |
| GET    | `/tasks/:id` | Retrieve a task by ID | -                                                            |
| POST   | `/tasks`     | Create a new task     | `{ "title": "Task 1", "description": "Do something" }`       |
| PUT    | `/tasks/:id` | Update a task by ID   | `{ "title": "Updated Task", "description": "Updated desc" }` |
| DELETE | `/tasks/:id` | Delete a task by ID   | -                                                            |

## Testing with Postman

1. Import the Postman collection from `postman_collection.json` (if provided) or manually test the endpoints.
2. Example: To create a task, send a POST request to `http://localhost:3000/tasks` with the body:
   ```json
   {
     "title": "Sample Task",
     "description": "This is a sample task"
   }
   ```

<!-- ![Postman Screenshot](postman_screenshot.png) -->
<div style="text-align: center;">
  <img src="postman_screenshot.png" alt="Postman Screenshot" width="50%">
</div>

## Project Structure

```
TaskNestAPI/
├── src/
│   ├── tasks/
│   │   ├── tasks.controller.ts
│   │   ├── tasks.service.ts
│   │   ├── tasks.module.ts
│   │   ├── dto/
│   │   │   ├── create-task.dto.ts
│   │   │   ├── update-task.dto.ts
│   │   ├── entities/
│   │   │   ├── task.entity.ts
│   ├── app.module.ts
│   ├── main.ts
├── test/
│   ├── tasks/
│   │   ├── tasks.controller.spec.ts
├── .env
├── docker-compose.yml
├── Dockerfile
├── .github/workflows/ci.yml
├── README.md
```

## Running in Production

1. Build the Docker image:
   ```bash
   docker build -t nestjs-task-api .
   ```
2. Run the container:
   ```bash
   docker run -p 3000:3000 nestjs-task-api
   ```

## GitHub Actions CI/CD

The `.github/workflows/ci.yml` file defines a workflow that:

- Lints the code
- Runs unit tests
- Builds the Docker image

Check the workflow status in the GitHub repository's Actions tab.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request
