# Student Management System API

This is a basic Student Management System API built using ExpressJS and MongoDB Atlas.

## Features

- **Admin Panel:**
  - Admin login
  - Add students with their name, email ID, department, and password
  - Assign tasks to students with a due time

- **Student Interface:**
  - Student login
  - View tasks assigned
  - Check the status of each task (pending, overdue, completed)
  - Change task status to completed

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/student-management-api.git
   cd student-management-api

2. **Install Dependencies:**
    ```bash
   npm install

3. **Set Up Environment Variables:**
   Set Up Environment Variables:
    Create a .env file in the root directory with the following variables:

    PORT=3000
    MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_secret_key

3. **Run the Application:**
    ```bash
   npm start

## Endpoints
    **Admin:**
    -  POST /api/admin/login: Admin login
    - POST /api/admin/sign-up: Admin sign-up
    - POST /api/admin/addStudent: Add a student
    - POST /api/admin/assignTask: Assign a task to a student

   **Student:**
    - POST /api/student/login: Student login
    - POST /api/student/sign-up: Student sign-up
    - GET /api/student/tasks/:studentId: Get tasks for a student
    - PATCH /api/student/completeTask/:taskId: Mark a task as completed

## ENV Variables and Values
    - PORT: Port for the server to listen on.
    - MONGODB_URI: MongoDB Atlas connection string.
    - JWT_SECRET: Secret key for JSON Web Token (JWT) generation.



