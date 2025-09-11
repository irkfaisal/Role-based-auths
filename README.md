# Role-based-auths
🔐 Auth App — Role & Permission Based Access Control

This project is a full-stack role-based authentication and authorization system built with:

Frontend → React (Vite) + React Router + Normal CSS

Backend → Node.js (Express), Prisma ORM, PostgreSQL

Database → PostgreSQL

It allows different users (Super Admin, Admin, Employee, etc.) to log in, access pages based on their role & permissions, and manage Users, Roles, Permissions, and Franchisees.

📌 Features
🔹 Authentication

Login with JWT-based authentication.

Super Admin can add users (regular users cannot register themselves).

Token-based session handling.

🔹 Authorization

Role-based access:

Super Admin can manage everything.

Admin can manage users (add, delete, activate/deactivate).

Employees and other roles only see pages allowed to them.

Permission-based access:

Assign pages dynamically to roles or users.

Users only see sidebar links for pages they have permission for.

🔹 User Management

Add users (by Super Admin / Admin only).

View all users.

Delete or deactivate users.

Assign roles and franchisees to users.

🔹 Role Management

Create, edit, delete roles dynamically.

Assign permissions (pages) to roles.

🔹 Page Management

Create pages dynamically from backend.

Assign pages to roles/users as permissions.

Sidebar auto-updates with assigned pages.

🔹 Franchisee Management

Create and manage franchisees.

Associate users with one or multiple franchisees.

🛠 Tech Stack
Client (Frontend)

React + Vite — fast and modern frontend framework.

React Router — client-side routing.

Normal CSS — clean component-based styling.

Server (Backend)

Express.js — RESTful API framework.

Prisma ORM — type-safe database access.

PostgreSQL — relational database.

JWT (jsonwebtoken) — authentication middleware.

📂 Project Structure
Frontend
client/
 ├── src/
 │   ├── components/     # Reusable UI components (forms, tables, etc.)
 │   ├── pages/          # Page-level components (Login, AddUser, AddRole, etc.)
 │   ├── api/            # API service layer (authApi.js, userApi.js, roleApi.js)
 │   ├── styles/         # CSS files for pages/components
 │   ├── utils/          # Helper functions (auth.js, token handling)
 │   └── App.jsx         # Main routing and layout

Backend
server/
 ├── prisma/
 │   ├── schema.prisma   # Prisma schema (models: User, Role, Page, Permission, Franchisee)
 │   └── seed.js         # Seeding database with initial data
 ├── controllers/        # Business logic (authController, roleController, etc.)
 ├── routes/             # Express route definitions
 ├── middleware/         # JWT & role-based middleware
 ├── index.js            # Express app entry point
 └── .env                # Environment variables (DB_URL, JWT_SECRET, etc.)

🚀 Setup Instructions
1. Clone Repository
git clone https://github.com/your-username/auth_app.git
cd auth_app

2. Backend Setup
cd server
npm install


Set up .env file:

DATABASE_URL="postgresql://user:password@localhost:51214/auth_app"
JWT_SECRET="yoursecretkey"


Run Prisma migrations & seed:

npx prisma migrate dev --name init
node prisma/seed.js


Start server:

npm run dev

3. Frontend Setup
cd client
npm install
npm run dev

📡 API Endpoints
Auth

POST /api/auth/login → Login

POST /api/auth/register → Add user (Super Admin only)

Users

GET /api/users → Get all users (Admin only)

DELETE /api/users/:id → Delete user (Admin only)

PATCH /api/users/:id/status → Activate/Deactivate user

Roles

POST /api/roles → Create role

GET /api/roles → Get all roles

PUT /api/roles/:id → Update role

DELETE /api/roles/:id → Delete role

Pages

POST /api/pages → Create page

GET /api/pages → Get all pages

Permissions

GET /api/permissions/user/:id → Get user permissions

POST /api/permissions/user/:id → Update user permissions

Franchisee

POST /api/franchisee → Create franchisee

GET /api/franchisee → Get all franchisees

✅ Future Improvements

Add refresh token mechanism.

Add UI for permissions management.

Role-based dashboard layouts.

Logging & audit trail for user activities.
