# Altrium-Project 

> A modern full-stack application powered by **Django REST Framework** and **React** — delivering a fast, scalable, and seamless web experience.
---

## Features

**Full-Stack Architecture**
- Django backend with powerful APIs
- React frontend with a smooth user experience

**Fast Development Setup**
- Easy backend migration workflow
- Hot-reload enabled React development server

**Modern UI**
- Responsive design
- Clean and interactive frontend experience

**Secure Backend**
- Django-powered authentication and API management

**Scalable Structure**
- Separated frontend and backend architecture
- Ready for production deployment

---

# Tech Stack

## Backend
<p>
<img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"/>
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
</p>

## Frontend
<p>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
</p>

---

# Project Structure

```
project-root/
│
├── backend/
│   ├── manage.py
│   ├── apps/
│   ├── settings/
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/project-name.git

cd project-name
```

---

#Backend Setup (Django)

Navigate into the backend directory:

```bash
cd backend
```

Run database migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

Backend will be available at:

```
http://127.0.0.1:8000/
```

---

# Frontend Setup (React)

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React development server:

```bash
npm run dev
```

Frontend will be available at:

```
http://localhost:5173
```

---

# Running the Application

Make sure both servers are running:

| Service | URL |
|---|---|
| Django Backend | http://127.0.0.1:8000 |
| React Frontend | http://localhost:5173 |

Your application is now live locally 🎉

---

# Environment Variables

Create your environment files:

### Backend `.env`

```
SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_URL=your_database_url
```

### Frontend `.env`

```
VITE_API_URL=http://127.0.0.1:8000
```

# License

This project is licensed under the MIT License.

---

# Author

**Malan De Mel**

If you like this project, consider giving it a star⭐
