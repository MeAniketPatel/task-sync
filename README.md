# TaskSync | Realtime Collaborative Kanban Board

TaskSync is an industrial-grade, collaborative task management application built with the MERN stack. It features server-authoritative task reordering, atomic database operations, and real-time synchronization via Socket.IO.

![Project Preview](https://via.placeholder.com/1200x600/020617/10b981?text=TaskSync+Realtime+Kanban+Board)

## 💎 Project Highlights

- **Server-Authoritative Synchronization**: Real-time updates across all connected clients using Socket.IO, triggered by REST API mutations for strict data integrity.
- **Atomic Task Reordering**: Implemented using MongoDB `bulkWrite` to ensure that task positions remain sequential (0, 1, 2...) without race conditions or data gaps.
- **Professional Auth System**: Secure authentication using JWT with Refresh Tokens stored in `HttpOnly` cookies, featuring automatic session restoration.
- **Elite Design**: A modern, responsive "Midnight Obsidian & Electric Emerald" UI featuring glassmorphism, backdrop filters, and fluid CSS animations.
- **Resilient Frontend**: Built with React Query to ensure "Single Source of Truth" state management with automatic retry and optimistic failure handling.

## 🛠 Tech Stack

- **Frontend**: React, Vite, React Query, Axios, dnd-kit, Socket.IO Client, Lucide React.
- **Backend**: Node.js, Express, Mongoose, Socket.IO, JWT, bcryptjs, Helmet, CORS.
- **Database**: MongoDB (with complex compound indexing for position optimization).

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas Account

### Backend Installation
1. Navigate to `backend/`
2. Run `npm install`
3. Create a `.env` file with your credentials.
4. Run `npm run dev`

### Frontend Installation
1. Navigate to `frontend/`
2. Run `npm install`
3. Run `npm run dev`