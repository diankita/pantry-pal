# PantryPal

PantryPal is a meal planning and inventory management application designed to simplify your cooking experience. It suggests recipes based on the ingredients available in your kitchen and helps manage your grocery inventory.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- PostgreSQL database

### Setting Up the Environment Variables

Create a `.env` file in project's server directory and add the following variables:

```
PG_DB="pantrypal"
PG_USER="your_postgres_username"
PG_PASSWORD="your_postgres_password"
PG_HOST="localhost"
```

### Backend Setup

Navigate to the backend directory:

```
cd server
npm i
nodemon app.js
```

### Frontend Setup

Navigate to the frontend directory:

```
cd client
npm i
npm run dev
```

### Tech Stack

**Front End:**

| ToolName      | Description                                        |
| ------------- | -------------------------------------------------- |
| Next.js       | React Framework                                    |
| Redux Toolkit | State Management Library                           |
| MUI           | Material UI for Components                         |
| DOMPurify     | Library to sanitize html before inserting into DOM |

**Back End:**
| ToolName | Description |
|-------------------|-------------------------------|
| Express.js | Backend Framework |
| PostgreSQL | Relational Database |
| Sequelize | ORM for Postgres |
| Express-validator | Libraries for data validation |
