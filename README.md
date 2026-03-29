# Job Sphere

Job Sphere is a lightweight full-stack job listing application that allows users to browse, filter, and view job opportunities. It includes authentication and a simple job browsing experience with filtering based on job type, experience level, and work mode.

---

## 🚀 Features

- User authentication
  - Register
  - Login
  - JWT-based 

- Job browsing
  - View all jobs
  - View single job details

- Job filtering
  - Experience level
  - Job type (full-time, part-time, etc.)
  - Work mode (remote, onsite, hybrid)

- Clean separation between frontend and backend

---

## 🏗️ Architecture Overview

The project follows a simple client-server architecture:

- **Frontend**
  - React-based UI ,ts and tailwind css
  - Pages: Login, Register, Home, Job Details
  - Handles job filtering and UI rendering

- **Backend**
  - Express-based REST API
  - Handles authentication and job data
  - Provides endpoints for login, register, and job retrieval
**Database**
 -mongodb to store user and jobs data 

---

## 🗂️ Project Structure
```
job-sphere/
├── client/                     # Frontend (React + TypeScript)
│   ├── public/
│   │   └── img/
│   ├── src/
│   │   ├── app/               # App state / store setup
│   │   ├── assets/            # Static assets
│   │   ├── Components/        # Reusable UI components
│   │   ├── features/          # Feature-based modules
│   │   ├── hooks/             # Custom React hooks
│   │   ├── layouts/           # Layout components
│   │   ├── Pages/             # Page-level components
│   │   ├── Protected/         # Protected routes
│   │   ├── router.tsx         # Routing configuration
│   │   └── main.tsx           # Entry point
│   ├── index.html
│   └── vite.config.ts
│
├── server/                     # Backend (Node.js + Express)
│   ├── config/
│   │   └── db.config.js       # Database connection
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── jobs.controller.js
│   ├── models/
│   │   ├── user.js
│   │   └── role.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── jobs.routes.js
│   ├── Services/
│   │   ├── auth.service.js
│   │   └── jobs.service.js
│   ├── app.js
│   └── package.json
│
└── README.md
```
---

## ⚙️ Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Authentication:** JWT
- **Routing:** Express Router

---

## 🔐 Authentication Flow

1. User registers via `/register`
2. User logs in via `/login`
3. Server validates credentials and returns a token
4. Token is used for protected actions (if implemented)

---

## 📡 API Endpoints

### Auth Routes

POST `/register`  
- Handles user registration  

POST `/login`  
- Handles user login  

---

### Job Routes

POST `/add`  
- Adds a new job (backend only)

GET `/`  
- Retrieves all jobs  

GET `/:id`  
- Retrieves a single job by ID  

---

## 🔄 Frontend Flow

1. User lands on Home page
2. User can:
   - View job listings
   - Apply filters (experience, type, work mode)
3. Clicking a job opens the Job Details page
4. Authentication is required for login/register flows

---

## 📌 Key Concepts

- **Separation of concerns**
  - Controllers handle logic
  - Routes handle endpoints
  - Frontend handles UI and filtering

- **Filtering logic**
  - Filtering is applied on the frontend (based on job attributes)

- **Simple backend design**
  - No complex services or pipelines
  - Focus is on clear API structure

---


## 🧪 How to Run

### Backend

cd server  
npm install  
npm run dev


### Frontend

cd client  
npm install  
npm run dev  

---
## 🎥 Demo

[Watch Demo Video](https://www.awesomescreenshot.com/video/50932615?key=648ea23a0a259e41bde4a2c41671272d)