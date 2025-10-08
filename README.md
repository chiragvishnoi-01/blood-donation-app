# Blood Donation App

A full-stack Blood Donation platform built with **React**, **Tailwind CSS**, **Node.js**, **Express**, and **MongoDB**.  
Allows users to find blood donors, request blood in emergencies, view campaigns, and track top donors.

---

## Features

- **Responsive Frontend**: Modern UI built with React + Tailwind CSS
- **Emergency SOS Requests**: Quickly send blood requests
- **Donor Dashboard**: View registered donors
- **Leaderboard**: Track top blood donors
- **Campaign Management**: View and participate in blood donation campaigns
- **REST API Backend**: Node.js + Express with MongoDB
- **Animated & Stylish UI**: GIFs and Tailwind animations

---

## Project Structure

blood-donation-app/
├── backend/ # Node.js + Express backend
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API routes
│ ├── server.js # Entry point
│ └── .env # Environment variables (excluded from git)
├── frontend/ # React frontend
│ ├── public/ # Static assets & GIFs
│ ├── src/
│ │ ├── components/ # Reusable React components
│ │ ├── pages/ # App pages
│ │ ├── data/ # Sample JSON data
│ │ ├── api/ # Axios instance
│ │ └── main.jsx # React entry point
│ ├── index.html
│ └── package.json
├── .gitignore
└── README.md
blood-donation-app/
├── backend/ # Node.js + Express backend
│ ├── models/ # MongoDB schemas
│ ├── routes/ # API routes
│ ├── server.js # Entry point
│ └── .env # Environment variables (excluded from git)
├── frontend/ # React frontend
│ ├── public/ # Static assets & GIFs
│ ├── src/
│ │ ├── components/ # Reusable React components
│ │ ├── pages/ # App pages
│ │ ├── data/ # Sample JSON data
│ │ ├── api/ # Axios instance
│ │ └── main.jsx # React entry point
│ ├── index.html
│ └── package.json
├── .gitignore
└── README.md


---

## Installation

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Set your MongoDB URI and email credentials
npm run dev

## Frontend 
cd frontend
npm install
npm run dev
Frontend will run on http://localhost:5173 (Vite default). Backend on http://localhost:5000.
## API Routes (Backend)
GET /api/banks → List all blood banks

GET /api/banks/:id → Single blood bank

POST /api/banks → Add blood bank

POST /api/banks/:id/campaigns → Add campaign

GET /api/leaderboard → Top donors

POST /api/sos → Send SOS requestTechnologies   
## Technologies

Frontend: React, Tailwind CSS, Vite, Axios

Backend: Node.js, Express, MongoDB, Mongoose

Tools: Git, VSCode

## Deployment
Use npm run build (frontend) for production

Backend can be deployed on Heroku, Render, Railway, or Vercel (for frontend)

## 📄 License

This project is open-source and free to use under the MIT License.
## Author

[chiragvishnoi-01] – Passionate about building apps that save lives.


If you want, I can also make a **version with badges, emojis, GitHub stats, and GIF previews** that looks fully **professional for GitHub showcase**.  

Do you want me to do that next?