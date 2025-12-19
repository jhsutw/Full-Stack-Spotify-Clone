# Full-Stack Spotify Clone (WebDB)

This project is a Spotify-themed full-stack web application developed for **CIS 5500: Database and Information Systems**.  
The application follows a three-tier architecture consisting of a PostgreSQL database, a Node.js API server, and a React frontend client.

The goal of this assignment is to gain hands-on experience with building database-backed web applications, implementing RESTful APIs, and developing an interactive multi-page frontend using modern JavaScript frameworks and UI libraries.

---

## Project Structure
client/ # React frontend (pages, components, API layer)
server/ # Node.js + Express backend (API routes)

The frontend and backend are cleanly separated to improve readability, maintainability, and scalability.

---

## Backend (Node.js + Express)

The backend exposes multiple GET endpoints defined in `server/routes/routes.js`, following the specification provided in the assignment.  
These endpoints query a PostgreSQL database containing Spotify album and song metadata and return JSON responses.

Implemented routes include:
- Author information
- Random song selection
- Song and album details
- Album listings and album songs
- Top songs and top albums with optional pagination
- Advanced song search with multiple filters
- A curated playlist endpoint

---

## Frontend (React)

The frontend is built with **React functional components and hooks**, using **React Router** for navigation.  
UI components are implemented with **MUI (Material UI)**, and data visualizations use **Recharts**.

The application consists of four main pages:
- Home
- Songs
- Albums
- Album Info

Reusable components such as tables and song detail modals are abstracted for clarity and reuse.

---

## Running the Application

```bash
# Backend
cd server
npm install
npm start

# Frontend
cd client
npm install
npm start
