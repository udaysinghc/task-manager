# Task Manager Project

A simple task management application with frontend and backend implementations.

## Structure
- Frontend: HTML, CSS, and JavaScript
- Backend: Choose either Python (Flask) or Java (Spring Boot)

## Setup Instructions

### Frontend
1. Navigate to the frontend directory
2. Open index.html in a web browser

### Python Backend
1. Navigate to backend/python
2. Install requirements: `pip install -r requirements.txt`
3. Run: `python app.py`

### Java Backend
1. Navigate to backend/java
2. Build: `mvn clean install`
3. Run: `mvn spring-boot:run`

## API Endpoints
- GET /api/tasks - Get all tasks
- POST /api/tasks - Create new task
- DELETE /api/tasks/{id} - Delete task

## Notes
- Backend runs on http://localhost:8080
- CORS is enabled for frontend development