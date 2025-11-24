# AI Wedding Planner 💍✨

A full-stack AI-powered wedding planning platform that helps couples plan their dream wedding with intelligent recommendations, budget management, timeline generation, and vendor discovery.

## 🚀 Features

### Frontend Features
- 🎨 **Beautiful UI**: Modern, responsive design with Tailwind CSS and pastel wedding theme
- 🔐 **Authentication**: Firebase Auth with email/password and Google OAuth
- 💬 **AI Chat Assistant**: Real-time AI-powered wedding planning advice
- 💰 **Budget Planner**: Smart budget tracking and AI-generated budget recommendations
- 📅 **Timeline Generator**: Automated wedding day schedule creation
- 👥 **Vendor Discovery**: Browse and filter wedding vendors by category
- 👤 **User Profiles**: Personalized wedding planning dashboard

### Backend Features
- 🤖 **OpenAI Integration**: GPT-powered intelligent responses and recommendations
- 📊 **MongoDB Database**: Scalable data storage for users, vendors, and wedding plans
- 🔒 **Secure API**: Rate limiting, CORS, and Helmet security
- 📝 **RESTful APIs**: Well-structured endpoints for all features
- 🎯 **Smart Recommendations**: AI-driven budget, timeline, and theme suggestions

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router v6** - Client-side routing
- **Firebase Auth** - Authentication
- **Axios** - HTTP client
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **OpenAI API** - AI capabilities
- **Helmet** - Security middleware
- **Morgan** - Request logging

## 📁 Project Structure

```
ai-wedding-planner/
├── frontend/                    # React frontend
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── ThemeCard.jsx
│   │   │   ├── VendorCard.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/              # Page components
│   │   │   ├── LandingPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AIPlannerChat.jsx
│   │   │   ├── BudgetPlanner.jsx
│   │   │   ├── TimelineGenerator.jsx
│   │   │   ├── VendorRecommendations.jsx
│   │   │   └── UserProfile.jsx
│   │   ├── context/            # React context
│   │   │   └── AuthContext.jsx
│   │   ├── config/             # Configuration
│   │   │   └── firebase.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
│
├── backend/                     # Node.js backend
│   ├── models/                 # Mongoose models
│   │   ├── User.js
│   │   ├── WeddingPlan.js
│   │   └── Vendor.js
│   ├── routes/                 # API routes
│   │   ├── authRoutes.js
│   │   ├── aiRoutes.js
│   │   └── vendorRoutes.js
│   ├── controllers/            # Route controllers
│   │   └── aiController.js
│   ├── utils/                  # Utility functions
│   │   └── openai.js
│   ├── server.js               # Entry point
│   ├── package.json
│   └── .env.example
│
├── package.json                # Root package.json
└── README.md                   # This file
```

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local or MongoDB Atlas account)
- **Firebase** project
- **OpenAI** API key

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ai-wedding-planner
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 3. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** → **Email/Password** and **Google** sign-in methods
4. Go to **Project Settings** → **General** → **Your apps**
5. Create a Web App and copy the configuration

### 4. OpenAI Setup

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Create an account or sign in
3. Navigate to **API Keys**
4. Create a new API key and copy it

### 5. MongoDB Setup

**Option A: Local MongoDB**
```bash
# Install MongoDB locally and start the service
mongod
```

**Option B: MongoDB Atlas (Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP address
5. Get your connection string

### 6. Environment Variables

#### Frontend Environment Variables

Create `frontend/.env` file:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Backend API URL
VITE_API_URL=http://localhost:5000
```

#### Backend Environment Variables

Create `backend/.env` file:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/ai-wedding-planner
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-wedding-planner

# OpenAI API
OPENAI_API_KEY=sk-your_openai_api_key_here

# CORS
FRONTEND_URL=http://localhost:3000
```

### 7. Run the Application

#### Option A: Run Both Simultaneously (Recommended)

From the root directory:
```bash
npm run dev
```

#### Option B: Run Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 8. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## 📚 API Documentation

### Authentication Endpoints

#### Save User
```http
POST /api/auth/saveUser
Content-Type: application/json

{
  "uid": "firebase_user_id",
  "email": "user@example.com",
  "displayName": "John Doe",
  "photoURL": "https://..."
}
```

#### Get User Profile
```http
GET /api/auth/user/:uid
```

#### Update User Profile
```http
PUT /api/auth/user/:uid
Content-Type: application/json

{
  "displayName": "John Doe",
  "weddingDetails": {
    "weddingDate": "2025-06-15",
    "budget": 30000
  }
}
```

### AI Endpoints

#### AI Chat
```http
POST /api/ai/chat
Content-Type: application/json

{
  "message": "Help me plan my wedding budget",
  "history": [...]
}
```

#### Generate Budget
```http
POST /api/ai/generateBudget
Content-Type: application/json

{
  "totalBudget": 30000,
  "guestCount": 150,
  "preferences": "outdoor wedding"
}
```

#### Generate Timeline
```http
POST /api/ai/generateTimeline
Content-Type: application/json

{
  "weddingType": "Traditional",
  "startTime": "10:00 AM",
  "duration": "8 hours"
}
```

#### Generate Theme
```http
POST /api/ai/generateTheme
Content-Type: application/json

{
  "preferences": "romantic",
  "season": "spring",
  "venue": "garden"
}
```

### Vendor Endpoints

#### Get All Vendors
```http
GET /api/vendors?category=Photography&search=wedding&rating=4
```

#### Get Vendor by ID
```http
GET /api/vendors/:id
```

#### Create Vendor
```http
POST /api/vendors
Content-Type: application/json

{
  "name": "Example Venue",
  "category": "Venue",
  "description": "Beautiful wedding venue",
  "location": "City Center",
  "contact": {
    "phone": "(555) 123-4567",
    "email": "info@example.com"
  }
}
```

#### Update Vendor
```http
PUT /api/vendors/:id
```

#### Delete Vendor
```http
DELETE /api/vendors/:id
```

#### Add Review
```http
POST /api/vendors/:id/review
Content-Type: application/json

{
  "userId": "user_id",
  "rating": 5,
  "comment": "Excellent service!"
}
```

## 🎨 Color Palette

The application uses a beautiful wedding-themed color palette:

- **Primary Pink**: `#ec4899` to `#831843`
- **Secondary Purple**: `#a855f7` to `#581c87`
- **Accent Orange**: `#f97316` to `#7c2d12`
- **Background**: Gradient from pink to purple pastels

## 🔒 Security Features

- Firebase Authentication for secure user management
- Rate limiting on API endpoints (100 requests per 15 minutes)
- Helmet.js for security headers
- CORS configuration
- Environment variable protection
- MongoDB injection prevention via Mongoose

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd frontend
vercel
```

3. Set environment variables in Vercel dashboard

### Backend Deployment (Railway)

1. Create account on [Railway](https://railway.app/)
2. Connect your GitHub repository
3. Set environment variables in Railway dashboard
4. Deploy automatically on push

### Environment Variables for Production

Update your environment variables with production URLs:
- Frontend: Update `VITE_API_URL` to production backend URL
- Backend: Update `FRONTEND_URL` to production frontend URL

## 🧪 Testing

```bash
# Frontend
cd frontend
npm run build
npm run preview

# Backend
cd backend
npm start
```

## 📝 Available Scripts

### Root
- `npm run install:all` - Install all dependencies
- `npm run dev` - Run both frontend and backend
- `npm run dev:frontend` - Run only frontend
- `npm run dev:backend` - Run only backend

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start with nodemon (auto-restart)
- `npm start` - Start production server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 💬 Support

For support, email support@aiweddingplanner.com or open an issue in the repository.

## 🎉 Acknowledgments

- OpenAI for AI capabilities
- Firebase for authentication
- MongoDB for database
- Tailwind CSS for styling
- Lucide React for icons

---

**Made with ❤️ for couples planning their perfect day**
