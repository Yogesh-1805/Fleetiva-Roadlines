# 🚚 Fleetiva Roadlines — Logistics & Transport SaaS

## 📋 Overview
Fleetiva Roadlines is a production-ready logistics platform for load posting, truck assignment, booking management, and Bilty (LR) generation. It supports role-based access for **Customers**, **Drivers**, and **Admins**, with real-time shipment status updates and printable documentation.

---

## ✨ Key Features
- **Role-Based Access Control (RBAC)** for customers, drivers, and admins.
- **JWT Authentication** with secure password hashing (bcrypt).
- **Load Posting & Matching** to assign available trucks.
- **Booking Management** with shipment status workflow.
- **Real Bilty (LR) Generation** stored in MongoDB and printable as PDF.
- **Payment Tracking** with balance calculations and status updates.
- **OTP Password Recovery** via Redis + Twilio.
- **Centralized Error Handling** and audit logs.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|------------|----------|
| **Frontend** | React + Vite | Fast, modern UI framework |
| | Axios | HTTP client with interceptors |
| | React Router | Role-based routing |
| | CSS Modules | Component-scoped styling |
| **Backend** | Node.js + Express | RESTful API server |
| | MongoDB + Mongoose | NoSQL database & ODM |
| | JWT + bcrypt | Authentication & password hashing |
| | PDFKit | Bilty/Invoice PDF generation |
| 
---

## 📁 Project Structure
```text
backend/
  config/
  middleware/
  models/
  routes/
  utils/
frontend/
  src/
    api/
    components/
    context/
    pages/
```

---

## 🔐 Environment Variables

### Backend (`backend/.env`)
- `MONGO_URI` — MongoDB Atlas connection string
- `ACCESS_TOKEN_SECRET` — JWT secret
- `ACCESS_TOKEN_TTL` — JWT TTL (e.g., `7d`)
- `FRONTEND_URL` — production frontend URL
- `FRONTEND_PREVIEW_URL` — preview URL (optional)
- `CORS_ORIGINS` — comma-separated CORS allowlist
- `VERCEL_PREVIEW_SUFFIX` — e.g., `.vercel.app`
- `FREIGHT_RATE_PER_TON` — base freight rate
- `OTP_TTL_SECONDS` — OTP expiration (default 600)
- `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER` — Twilio SMS
- `REDIS_URL` — Redis connection string
- `SKIP_MONGO` — set `true` to skip DB (not for production)
- `SKIP_FIREBASE` — set `true` if not using Firebase

### Frontend (`frontend/.env`)
- `VITE_API_BASE_URL` — backend API base (e.g., `https://your-backend.onrender.com/api`)
- `VITE_RENDER_SERVICE_NAME` — Render service name for preview URLs
- `VITE_RENDER_SERVICE_URL` — Render base URL
- `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID`

---

## 📦 Prerequisites

Before running this project locally, ensure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB Atlas** account (or local MongoDB instance)
- **Git** installed
- **Redis** (optional, for OTP functionality)
- **Twilio** account (optional, for SMS)


## 🔌 API Highlights

| Method | Endpoint | Role | Description |
|--------|----------|------|-------------|
| `POST` | `/api/auth/register` | Public | Register new user |
| `POST` | `/api/auth/login` | Public | User login |
| `GET` | `/api/auth/me` | Authenticated | Get current user |
| `POST` | `/api/load/post` | Customer | Post new load |
| `GET` | `/api/load/available` | Admin | View available loads |
| `POST` | `/api/truck/post` | Driver | Post truck availability |
| `GET` | `/api/match/:loadId` | Admin | Match trucks to load |
| `POST` | `/api/booking/create` | Admin | Create booking + Bilty |
| `GET` | `/api/booking/all` | Admin | View all bookings |
| `GET` | `/api/booking/customer/bookings` | Customer | View own bookings |
| `GET` | `/api/booking/driver/bookings` | Driver | View assigned bookings |
| `PATCH` | `/api/booking/:id/status` | Driver | Update shipment status |
| `GET` | `/api/booking/:id/bilty` | Authenticated | Download Bilty PDF |
| `GET` | `/api/booking/:id/invoice` | Authenticated | Download Invoice PDF |

---

## 🔒 Security Notes
- Secrets are stored in `.env` only.
- Passwords are hashed with bcrypt.
- JWTs are validated on every protected route.
- CORS and HTTP-only cookies are supported.



## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 💬 Support

If you have questions or need help:
- 📧 Open an issue on GitHub
- 💡 Check existing issues and discussions
- 🌟 Star this repo if you find it helpful!

---


