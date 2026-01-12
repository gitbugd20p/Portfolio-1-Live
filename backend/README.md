# 🚀 Portfolio-1 Backend API (Express.js – ES5)

A clean, secure, and scalable **Express.js backend** written in **CommonJS (ES5)** style.
This backend powers a personal **Portfolio Platform**, providing **authentication**, **portfolio management**, **experience**, and **blog APIs** with strong security practices.

---

## 🧱 Tech Stack

-   **Node.js**
-   **Express.js (ES5 / CommonJS)**
-   **MongoDB + Mongoose**
-   **JWT Authentication**
-   **bcrypt** for password hashing
-   **Cookie-based auth** (HttpOnly)
-   **Security middlewares** (Helmet, HPP, Rate Limit, Mongo Sanitize)

---

## 📂 Project Structure

```plaintext
backend
├── app.js                     # Express app & global middlewares
├── index.js                   # Server entry point
├── package.json
├── .env                       # Environment variables
├── uploads                    # Uploaded files (images, assets)
└── src
    ├── controllers            # Business logic
    │   ├── userController.js
    │   ├── portfolioController.js
    │   ├── experienceController.js
    │   └── blogController.js
    ├── middlewares
    │   └── authMiddleware.js  # JWT auth protection
    ├── models                 # Mongoose schemas
    │   ├── userModel.js
    │   ├── portfolioModel.js
    │   ├── experienceModel.js
    │   └── blogModel.js
    ├── routes
    │   └── api.js             # All API routes
    └── utility
        └── tokenUtility.js    # JWT create & verify helpers
```

---

## ✨ Features

### 🔐 Authentication

-   User **Register / Login / Logout**
-   Password hashing with **bcrypt**
-   JWT stored in **HttpOnly cookies**
-   Protected routes via middleware

### 🗂 Portfolio Management

-   Create portfolio items
-   Get all portfolios
-   Get single portfolio
-   Update portfolio
-   Delete portfolio

### 💼 Experience Module

-   CRUD operations for experience entries

### ✍️ Blog Module

-   Create blog posts
-   Pagination support
-   Single blog fetch
-   Update & delete blog posts

### 🛡 Security

-   `helmet` – Secure HTTP headers
-   `express-mongo-sanitize` – Prevent NoSQL injection
-   `hpp` – Prevent HTTP parameter pollution
-   `express-rate-limit` – Rate limiting
-   Secure cookies in production

---

## ⚙️ Environment Variables

Create a `.env` file in the backend root:

```env
PORT=5000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE_TIME=7d
COOKIE_EXPIRE_TIME=604800000
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

---

## 📦 Installation

```bash
# Install dependencies
npm install
```

---

## ▶️ Run Server

### Development (with nodemon)

```bash
npm run dev
```

### Production

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 📡 API Base URL

```
/api/v1
```

---

## 👤 User Routes

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| POST   | `/register`       | Register new user  |
| POST   | `/login`          | Login user         |
| GET    | `/logout`         | Logout user        |
| GET    | `/user-profile`   | Get logged-in user |
| PUT    | `/update-profile` | Update profile     |

🔒 Protected routes require authentication.

---

## 📁 Portfolio Routes

| Method | Endpoint                | Description         |
| ------ | ----------------------- | ------------------- |
| POST   | `/create-portfolio`     | Create portfolio    |
| GET    | `/portfolio`            | Get all portfolios  |
| GET    | `/portfolio/:id`        | Get portfolio by ID |
| PUT    | `/update-portfolio/:id` | Update portfolio    |
| DELETE | `/delete-portfolio/:id` | Delete portfolio    |

---

## 💼 Experience Routes

| Method | Endpoint                 | Description         |
| ------ | ------------------------ | ------------------- |
| POST   | `/create-experience`     | Create experience   |
| GET    | `/experience`            | Get all experiences |
| GET    | `/experience/:id`        | Get experience      |
| PUT    | `/update-experience/:id` | Update experience   |
| DELETE | `/delete-experience/:id` | Delete experience   |

---

## ✍️ Blog Routes

| Method | Endpoint                    | Description     |
| ------ | --------------------------- | --------------- |
| POST   | `/create-blog`              | Create blog     |
| GET    | `/blogs/:pageNo?/:perPage?` | Paginated blogs |
| GET    | `/blog/:id`                 | Single blog     |
| PUT    | `/update-blog/:id`          | Update blog     |
| DELETE | `/delete-blog/:id`          | Delete blog     |

---

## 🖼 Static Files

-   **Uploads directory:** `/uploads`

Example:

```
GET /uploads/image.png
```

---

## 🔐 Security Notes

-   JWT tokens stored in **HttpOnly cookies**
-   Passwords are never stored in plain text
-   Environment variables keep secrets safe
-   HTTPS recommended in production
-   CORS origin strictly controlled

---

## 📜 License

MIT License

---

## 👤 Author

**Md Sabur**
GitHub: [https://github.com/gitbugd20p](https://github.com/gitbugd20p)

---

If you want, next I can:

-   Split this into **Backend README + API Docs**
-   Create a **combined root README** (Frontend + Backend)
-   Write **Swagger / OpenAPI docs**
-   Or align it with your **Portfolio-1 PMDS style**

Just say the word 🔥
