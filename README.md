# ApplyTrack

ApplyTrack is a full-stack job application tracker that helps users organize and manage their job search. It allows users to keep all of their job applications in one place, update their progress, and track where they are in the hiring process through a clean, modern interface.

## Features

- Create new job applications
- View all saved applications
- Edit existing applications
- Delete applications with a confirmation dialog
- Track application status (Applied, Interviewing, Offer, Rejected, Withdrawn)
- View the original job posting
- Color-coded status indicators
- Responsive Material UI interface

---

# Tech Stack

### Frontend

- React
- TypeScript
- Material UI (MUI)
- React Router

### Backend

- Node.js
- Express
- TypeScript

### Database

- PostgreSQL
- Raw SQL
- Liquibase

### Architecture

- Repository Pattern
- Dependency Inversion
- REST API

---

# Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/CastroEthan/apply-track.git
cd apply-track
```

## 2. Start the database

From the project root:

```bash
docker compose up -d
```

## 3. Start the backend

Open a terminal:

```bash
cd backend
npm install
npm run dev
```

The backend runs on:

```text
http://localhost:3000
```

## 4. Start the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## 5. Open the application

Visit:

```text
http://localhost:5173
```

You can now create, edit, update, and delete job applications through the dashboard.
