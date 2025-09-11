# Auth App – Role-Based Access Control (RBAC) System

This project is a **Role-Based Authentication and Authorization System** built with **MERN stack** (MongoDB/PostgreSQL with Prisma, Express.js, React.js, Node.js, Vite).  
It enables **Super Admins** to manage users, roles, pages, and franchisees with full permission control.

---

## 🚀 Features

### 🔐 Authentication
- User **register** (only by Super Admin)
- User **login** with JWT token
- Token-based authentication (stored in localStorage)

### 👥 User Management
- Super Admin can:
  - Add new users
  - View all users
  - Delete users
  - Activate/Deactivate users
- Users are linked to roles & franchisees

### 📜 Role Management
- Super Admin can:
  - Create roles (Admin, Manager, Employee, Director, SuperAdmin, etc.)
  - Edit/Delete roles
  - Assign roles to users dynamically

### 📄 Page Management
- Super Admin can:
  - Create, update, and delete pages
  - Assign permissions to roles for specific pages
- Sidebar in React automatically shows only **authorized pages**

### 🏢 Franchisee Management
- Super Admin can:
  - Add multiple franchisees
  - Assign users to one or more franchisees
- Franchisees include:
  - Traffic NZ
  - Refresh NZ
  - Refresh International
  - Refresh AU
  - Refresh UK
  - Refresh US
  - Zones NZ
  - Zones AU
  - Zones International
  - Oncore NZ
  - Oncore International
  - Techverse Origin
  - We Sort It

---

## 🛠 Tech Stack

### Backend
- **Node.js + Express**
- **Prisma ORM**
- **PostgreSQL**
- JWT Authentication
- Middleware-based Role/Permission checks

### Frontend
- **React.js (Vite)**
- **React Router DOM**
- **Normal CSS** (no heavy framework)
- Component-based architecture
- API calls separated into `services/`

---

## 📂 Project Structure

### Backend (`/server`)
server/
┣ prisma/
┃ ┣ schema.prisma
┃ ┣ seed.js
┣ routes/
┃ ┣ authRoutes.js
┃ ┣ userRoutes.js
┃ ┣ roleRoutes.js
┃ ┣ pageRoutes.js
┃ ┣ franchiseeRoutes.js
┣ controllers/
┃ ┣ authController.js
┃ ┣ userController.js
┃ ┣ roleController.js
┃ ┣ pageController.js
┃ ┣ franchiseeController.js
┣ middlewares/
┃ ┣ authMiddleware.js
┃ ┣ roleMiddleware.js
┣ utils/
┃ ┣ jwt.js
┣ index.js


### Frontend (`/client`)

client/
┣ src/
┃ ┣ components/
┃ ┃ ┣ Header.jsx
┃ ┃ ┣ Sidebar.jsx
┃ ┃ ┣ Content.jsx
┃ ┣ pages/
┃ ┃ ┣ LoginPage.jsx
┃ ┃ ┣ HomePage.jsx
┃ ┃ ┣ AdminPage.jsx
┃ ┃ ┣ AddUserPage.jsx
┃ ┃ ┣ AddRolePage.jsx
┃ ┃ ┣ AddFranchiseePage.jsx
┃ ┣ services/
┃ ┃ ┣ api.js
┃ ┃ ┣ userService.js
┃ ┃ ┣ roleService.js
┃ ┃ ┣ franchiseeService.js
┃ ┣ utils/
┃ ┃ ┣ auth.js
┃ ┣ App.jsx
┃ ┣ main.jsx


---

## 📊 Database Schema

The system contains the following models:

- **User**
  - `id`, `name`, `email`, `password`, `roleId`, `franchisees[]`, `permissions[]`
- **Role**
  - `id`, `name`, `users[]`
- **Page**
  - `id`, `name`, `path`, `isActive`, `permissions[]`
- **Permission**
  - `id`, `roleId`, `pageId`, `canView`, `canEdit`, `canDelete`
- **Franchisee**
  - `id`, `name`, `users[]`

📄 Full ERD Diagram:  
![ERD Diagram](./auth_app_erd.png)

---

## 🔑 API Endpoints

### Auth
- `POST /api/register` → Create new user (only Super Admin)
- `POST /api/login` → Login user and get token

### Users
- `GET /api/users` → Get all users (Admin only)
- `DELETE /api/users/:id` → Delete user (Admin only)
- `PATCH /api/users/:id/activate` → Activate user (Admin only)
- `PATCH /api/users/:id/deactivate` → Deactivate user (Admin only)

### Roles
- `POST /api/roles` → Create role
- `GET /api/roles` → Get all roles
- `PATCH /api/roles/:id` → Update role
- `DELETE /api/roles/:id` → Delete role

### Pages
- `POST /api/pages` → Create page
- `GET /api/pages` → Get all pages
- `PATCH /api/pages/:id` → Update page
- `DELETE /api/pages/:id` → Delete page

### Franchisees
- `POST /api/franchisees` → Create franchisee
- `GET /api/franchisees` → Get all franchisees
- (Future: Assign users to franchisees)

---

## ⚡ Setup Instructions

1. Clone the repo:
   ```sh
   git clone https://github.com/yourusername/auth_app.git

2. cd server && npm install
cd ../client && npm install
3. cd server
npx prisma migrate dev
node prisma/seed.js

4.npm run dev
