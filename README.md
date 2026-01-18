### ⚛️ Portfolio-One-Live

A high-performance, **public-facing portfolio** built with the **MERN Stack**. This repository represents the "Live" version of the platform—optimized for visitors to explore projects, professional experience, and blog content with seamless speed and security.

---

## 🌐 Live Deployment

-   **Live Preview:** [https://mdsabur-portfolio-one.vercel.app/](https://mdsabur-portfolio-one.vercel.app/)
-   **Repository:** [https://github.com/gitbugd20p/Portfolio-1-Live](https://github.com/gitbugd20p/Portfolio-1-Live)

---

## 📂 Project Architecture

```plaintext
Portfolio-1-Live/
├── client/              # React 19 + Vite (Visitor UI)
│   ├── src/components/  # UI Sections (Banner, Project Cards, Timeline)
│   ├── src/pages/       # Public Views (Home, Portfolio, Blog)
│   ├── src/store/       # Zustand (Fetching & Global UI State)
│   └── src/services/    # API Client configuration
└── server/              # Node.js + Express (Read-Optimized API)
    ├── src/models/      # Schemas for Banner, Education, Projects, etc.
    ├── src/controllers/ # Data delivery logic (GET focused)
    └── src/routes/      # Public API endpoints

```

---

## 🚀 Optimized Tech Stack

### **Frontend (Public UI)**

-   **Core:** React 19 + Vite
-   **Styling:** Tailwind CSS 4.1 + DaisyUI
-   **State:** Zustand (Efficient data hydration)
-   **Animation:** React Simple Typewriter
-   **UX:** Skeleton Loaders for smooth data fetching

### **Backend (Data API)**

-   **Runtime:** Node.js + Express.js
-   **Database:** MongoDB + Mongoose
-   **Security:** Helmet, CORS (Restricted to production domain), HPP
-   **Performance:** Optimized GET queries for fast content delivery

---

## ✨ Public Display Modules

This version is streamlined to provide viewers with a comprehensive look at my professional profile through the following modules:

| Module                  | Purpose                                                 |
| ----------------------- | ------------------------------------------------------- |
| **🚩 Banner/Hero**      | Dynamic greetings, roles, and typewriter introductions. |
| **🎓 Education**        | Academic background and certifications timeline.        |
| **🚀 Project Showcase** | Browseable gallery of technical projects with details.  |
| **✍️ Blog Feed**        | Read-only access to technical articles and thoughts.    |
| **💼 Experience**       | Professional work history and milestones.               |

---

## 🛠️ Getting Started

### 1. Repository Setup

```bash
git clone https://github.com/gitbugd20p/Portfolio-1-Live.git
cd Portfolio-1-Live

```

### 2. Environment Configuration

**Client (`/client/.env`):**

```env
VITE_BASE_URL=https://your-api-url.com/api/v1

```

**Server (`/server/.env`):**

```env
PORT=5000
DB_URL=your_mongodb_uri
CORS_ORIGIN=https://mdsabur-portfolio-one.vercel.app

```

---

## 📡 Public API Endpoints (GET Only)

The Live version is configured primarily for data retrieval to ensure maximum security and performance:

-   `GET /api/v1/banner` - Fetch hero section content.
-   `GET /api/v1/education` - Fetch academic history.
-   `GET /api/v1/portfolio` - Fetch all showcased projects.
-   `GET /api/v1/experience` - Fetch professional timeline.

---

## 👤 Author

**Md Sabur**
_MERN Stack Developer | UI/UX Focused Frontend Engineer_

-   **GitHub:** [@gitbugd20p](https://github.com/gitbugd20p)
-   **Portfolio:** [Visit Live Site](https://mdsabur-portfolio-one.vercel.app/)

---

## 📜 License

This project is licensed under the MIT License.

---
