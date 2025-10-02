💼 Job Portal App (Render Ready)

A modern, full-stack Job Portal built with the MERN stack, enabling students and recruiters to connect seamlessly. With a clean, animated, and responsive UI, this platform allows users to explore opportunities, post jobs, and manage applications efficiently.

⚙️ Getting Started & Deployment
1️⃣ Clone the Repository
git clone https://github.com/shweta123singh/Job-Portal.git 
cd job-portal

2️⃣ Environment Variables

Create a .env file inside the server/ directory or set them in Render dashboard:

# MongoDB Atlas
MONGODB_URI="your-mongodb-atlas-uri"

# Server
PORT=8000
SECRET_KEY="your-jwt-secret"

# Cloudinary (optional if using image upload)
CLOUDINARY_API_KEY="your-cloudinary-api-key"
CLOUDINARY_SECRET_KEY="your-cloudinary-secret"
CLOUDINARY_NAME="your-cloudinary-cloud-name"

# Environment
NODE_ENV="development"


Render Notes:

On Render, do NOT use a local .env file. Go to your Web Service → Environment → Add Environment Variable → Use the same keys as above.

Render automatically assigns process.env.PORT.

3️⃣ Install Dependencies
# Frontend
cd client
npm install

# Backend
cd ../server
npm install

4️⃣ Run Locally
# Backend
cd server
npm run dev

# Frontend
cd ../client
npm start


Open in browser:

Frontend → http://localhost:5173

Backend → http://localhost:8000

5️⃣ Deploy on Render

Go to Render
 → New → Web Service

Connect GitHub → Select your repo

Configure:

Branch: main

Environment: Node

Build Command: npm install

Start Command: npm start

Add Environment Variables (MONGODB_URI, SECRET_KEY, Cloudinary keys, etc.)

Click Create Web Service → Render builds & deploys automatically

6️⃣ Project Structure
job-portal/
├── client/       # React + Tailwind frontend
│   ├── components/
│   ├── pages/
│   └── ...
├── server/       # Express backend API
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── index.js
└── README.md

7️⃣ Backend Notes

Server listens on dynamic port from process.env.PORT for Render:

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


Connects to MongoDB Atlas via process.env.MONGODB_URI

Protected routes for authentication & job management

✨ Features

🔐 JWT Authentication

👥 Role-based access (Student / Recruiter)

🌐 Responsive UI with Tailwind CSS & Framer Motion

CRUD operations for companies & jobs

📜 License

MIT License — Open-source project

👨‍💻 Author
- **Shweta Singh**
- 🔗 [LinkedIn](https://www.linkedin.com/in/25shwetasingh/)
