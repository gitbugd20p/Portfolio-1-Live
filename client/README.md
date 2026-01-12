# ⚛️ Portfolio-1 Frontend

**React + Vite + Tailwind CSS 4.1**

A modern, fast, and scalable **frontend for a personal portfolio platform**, built with **React**, **Vite**, and **Tailwind CSS 4.1**.
This frontend consumes a secure **Express + MongoDB REST API** and showcases portfolio projects, experience, blogs, and profile data.

---

## 🌐 Live Preview

> _Coming soon_
> (Deploy easily on **Vercel**, **Netlify**, or **Cloudflare Pages**)

---

## 🚀 Tech Stack

- **React 19** — Component-based UI
- **Vite** — Lightning-fast bundler & dev server
- **Tailwind CSS 4.1** — Utility-first styling
- **React Router DOM** — Client-side routing
- **Zustand** — Lightweight state management
- **Axios** — API communication
- **React Icons** — Icon library
- **React Toastify** — Notifications & alerts
- **ESLint** — Code quality & linting
- **Prettier + Tailwind Plugin** — Formatting consistency
- **DaisyUI** — Optional UI components on top of Tailwind

---

## 📁 Project Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── assets/
│   ├── images/
│   └── styles/
├── components/
│   ├── common/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── portfolio/
│   ├── blog/
│   └── experience/
├── pages/
│   ├── Home.jsx
│   ├── Portfolio.jsx
│   ├── Blog.jsx
│   └── NotFound.jsx
├── store/
│   └── useAuthStore.js
├── services/
│   └── api.js
└── routes/
    └── AppRoutes.jsx
```

> Folder names may evolve as features grow — structure is intentionally scalable.

---

## ✨ Features

- 🔐 Authentication-aware UI (JWT-based backend)
- 📂 Portfolio listing & details
- 🧑‍💼 Experience section
- ✍️ Blog listing with pagination
- 🎨 Fully responsive design
- ⚡ Fast page loads with Vite
- 🧠 Centralized state with Zustand
- 🔔 Toast notifications for actions
- 🧹 Clean & maintainable component architecture

---

## 🔌 Backend Integration

This frontend connects to the **Portfolio-1 Backend API**, which provides:

- User authentication
- Portfolio CRUD
- Experience CRUD
- Blog CRUD with pagination
- Secure JWT-protected routes

API base URL is configured via Axios (example):

```js
// services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

export default api;
```

---

## 🧪 Environment Variables

Create a `.env` file in the root:

```env
VITE_BASE_URL=http://localhost:5000/api/v1
```

---

## 🛠️ Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## 🧠 Notes

- **Tailwind CSS 4.1** works without `tailwind.config.js` by default
- ESLint is minimal by design — extend as needed
- Zustand is used instead of Redux for simplicity
- Designed to work seamlessly with your existing backend API

---

## 📌 Future Enhancements

- Admin dashboard
- Dark / light mode toggle
- SEO optimization
- Skeleton loaders
- Role-based access
- Markdown blog editor

---

## 📄 License

MIT License
