# Zerodha Clone (MERN Stack)

A full-stack clone of the Zerodha website, built with the MERN stack while following the Apna College project. It has a responsive multi-page landing site, a signup flow connected to MongoDB, an Express REST API, and a trading dashboard.

**GitHub:** https://github.com/Ranjana-git7/zerodha-clone
**Live demo:** _add your Vercel link here (optional)_

## Features

- Landing pages: Home, About, Products, Pricing and Support
- Client-side routing with React Router
- Signup form that saves users to MongoDB, with passwords hashed using bcrypt
- Express REST API for holdings, positions and orders
- Separate trading dashboard app
- Responsive design with Bootstrap

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, React Router, Bootstrap |
| Backend | Node.js, Express, Mongoose |
| Database | MongoDB Atlas |
| Security | bcryptjs, dotenv, CORS |

## Project Structure

```
backend/     Express API and Mongoose models
frontend/    Landing website (React)
dashboard/   Trading dashboard (React)
```

## Getting Started

You need Node.js and a free MongoDB Atlas cluster.

### 1. Clone the repository

```bash
git clone https://github.com/Ranjana-git7/zerodha-clone.git
cd zerodha-clone
```

### 2. Backend

```bash
cd backend
npm install
```

Create a file `backend/.env`:

```
MONGO_URL=your_mongodb_atlas_connection_string
PORT=3002
```

Start the server:

```bash
npm start
```

You should see `App started on port 3002` and `DB connected!`.

### 3. Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Opens at http://localhost:3000

### 4. Dashboard

Open a third terminal:

```bash
cd dashboard
npm install
npm start
```

If port 3000 is busy, accept the prompt to use another port.

## API Endpoints

| Method | Route | Description |
|---|---|---|
| POST | `/signup` | Create a new user |
| GET | `/allHoldings` | List all holdings |
| GET | `/allPositions` | List all positions |
| POST | `/newOrder` | Save a new order |

## Environment Variables

| Variable | Used in | Purpose |
|---|---|---|
| `MONGO_URL` | backend | MongoDB Atlas connection string |
| `PORT` | backend | API port (default 3002) |
| `REACT_APP_API_URL` | frontend | Backend URL when deployed (default http://localhost:3002) |

## What I Learned

- Building a multi-page React app with React Router
- Designing REST APIs with Express and Mongoose
- Securing passwords with bcrypt hashing
- Connecting a React frontend to a Node backend
- Using Git, GitHub and environment variables

## Credits

Based on the Apna College Zerodha clone project. This is a learning project and is not affiliated with Zerodha.
