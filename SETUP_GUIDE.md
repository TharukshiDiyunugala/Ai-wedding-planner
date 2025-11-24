# AI Wedding Planner - Setup Guide

## 📋 Complete Setup Checklist

Follow these steps to get your AI Wedding Planner up and running:

### ✅ Step 1: Prerequisites

- [ ] Node.js v16+ installed ([Download](https://nodejs.org/))
- [ ] MongoDB installed or MongoDB Atlas account ([Get Started](https://www.mongodb.com/cloud/atlas))
- [ ] Firebase account ([Sign Up](https://firebase.google.com/))
- [ ] OpenAI API key ([Get Key](https://platform.openai.com/api-keys))
- [ ] Git installed

### ✅ Step 2: Firebase Setup

1. **Create Firebase Project**
   - [ ] Go to [Firebase Console](https://console.firebase.google.com/)
   - [ ] Click "Add project"
   - [ ] Enter project name: "ai-wedding-planner"
   - [ ] Disable Google Analytics (optional)

2. **Enable Authentication**
   - [ ] Go to Build → Authentication
   - [ ] Click "Get started"
   - [ ] Enable "Email/Password" sign-in method
   - [ ] Enable "Google" sign-in method
   - [ ] Add your email as test user

3. **Get Firebase Config**
   - [ ] Go to Project Settings (gear icon)
   - [ ] Scroll to "Your apps" → Web
   - [ ] Click "Add app" and register
   - [ ] Copy the config object

4. **Configure Authorized Domains**
   - [ ] In Authentication → Settings → Authorized domains
   - [ ] Add: `localhost` (for development)
   - [ ] Add your production domain (when deploying)

### ✅ Step 3: OpenAI Setup

1. **Get API Key**
   - [ ] Go to [OpenAI Platform](https://platform.openai.com/)
   - [ ] Sign up or log in
   - [ ] Navigate to API Keys section
   - [ ] Click "Create new secret key"
   - [ ] Copy the key (you won't see it again!)
   - [ ] Add billing method if needed

2. **Set Usage Limits (Optional)**
   - [ ] Go to Billing → Usage limits
   - [ ] Set monthly budget cap
   - [ ] Enable email notifications

### ✅ Step 4: MongoDB Setup

**Option A: Local MongoDB**
```bash
# macOS
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

# Windows (Download from mongodb.com and run installer)
# Ubuntu
sudo apt-get install mongodb
sudo systemctl start mongodb
```

**Option B: MongoDB Atlas (Recommended)**
1. - [ ] Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. - [ ] Create free account
3. - [ ] Create new cluster (M0 Free tier)
4. - [ ] Wait for cluster creation (2-3 minutes)
5. - [ ] Click "Connect"
6. - [ ] Add your current IP address
7. - [ ] Create database user (username/password)
8. - [ ] Choose "Connect your application"
9. - [ ] Copy connection string
10. - [ ] Replace `<password>` with your password

### ✅ Step 5: Project Installation

```bash
# Clone repository
git clone <your-repo-url>
cd ai-wedding-planner

# Install all dependencies
npm run install:all

# Or install individually
npm install           # Root dependencies
cd frontend && npm install
cd ../backend && npm install
```

### ✅ Step 6: Environment Configuration

**Frontend (.env)**
```bash
cd frontend
cp .env.example .env
# Edit .env with your Firebase config
```

Required variables:
- [ ] `VITE_FIREBASE_API_KEY`
- [ ] `VITE_FIREBASE_AUTH_DOMAIN`
- [ ] `VITE_FIREBASE_PROJECT_ID`
- [ ] `VITE_FIREBASE_STORAGE_BUCKET`
- [ ] `VITE_FIREBASE_MESSAGING_SENDER_ID`
- [ ] `VITE_FIREBASE_APP_ID`
- [ ] `VITE_API_URL=http://localhost:5000`

**Backend (.env)**
```bash
cd backend
cp .env.example .env
# Edit .env with your credentials
```

Required variables:
- [ ] `PORT=5000`
- [ ] `NODE_ENV=development`
- [ ] `MONGODB_URI=<your-mongodb-connection-string>`
- [ ] `OPENAI_API_KEY=<your-openai-api-key>`
- [ ] `FRONTEND_URL=http://localhost:3000`

### ✅ Step 7: Run the Application

**Option A: Run both together (Recommended)**
```bash
# From root directory
npm run dev
```

**Option B: Run separately**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

### ✅ Step 8: Verify Installation

- [ ] Backend running at http://localhost:5000
- [ ] Check health: http://localhost:5000/health
- [ ] Frontend running at http://localhost:3000
- [ ] MongoDB connected (check terminal output)
- [ ] No errors in console

### ✅ Step 9: Test the Application

1. **Test Registration**
   - [ ] Go to http://localhost:3000
   - [ ] Click "Get Started"
   - [ ] Register with email/password
   - [ ] Verify redirect to dashboard

2. **Test Google Login**
   - [ ] Go to login page
   - [ ] Click "Login with Google"
   - [ ] Verify authentication works

3. **Test AI Chat**
   - [ ] Navigate to AI Chat page
   - [ ] Send a message: "Help me plan my wedding"
   - [ ] Verify AI responds

4. **Test Budget Planner**
   - [ ] Go to Budget Planner
   - [ ] Click "AI Budget Suggestions"
   - [ ] Verify budget generates

5. **Test Timeline**
   - [ ] Go to Timeline Generator
   - [ ] Click "AI Generate Timeline"
   - [ ] Verify timeline appears

6. **Test Vendors**
   - [ ] Go to Vendor Recommendations
   - [ ] Verify sample vendors display
   - [ ] Test search and filter

### ✅ Step 10: Common Issues & Solutions

**MongoDB Connection Failed**
```bash
# Check if MongoDB is running
mongosh

# Restart MongoDB
brew services restart mongodb-community  # macOS
sudo systemctl restart mongodb           # Linux
```

**Firebase Auth Error**
- Verify all Firebase config values are correct
- Check authorized domains in Firebase console
- Ensure auth methods are enabled

**OpenAI API Error**
- Verify API key is valid
- Check API usage limits
- Ensure billing is set up

**Port Already in Use**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**CORS Error**
- Verify `FRONTEND_URL` in backend .env matches frontend URL
- Restart backend server after env changes

### ✅ Step 11: Deployment (Optional)

See README.md for detailed deployment instructions to:
- Frontend: Vercel
- Backend: Railway
- Database: MongoDB Atlas

### 📞 Need Help?

- Check the main README.md
- Check frontend/README.md
- Check backend/README.md
- Open an issue on GitHub

### 🎉 Success!

Once all steps are complete, you have a fully functional AI Wedding Planner!

**What's Next?**
- Customize the theme and colors
- Add more vendors to the database
- Enhance AI prompts
- Add more features
- Deploy to production

Happy wedding planning! 💍✨
