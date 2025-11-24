# Frontend README

## AI Wedding Planner - Frontend

React + Vite frontend for the AI Wedding Planner application.

## 🎨 Features

- Modern, responsive UI with Tailwind CSS
- Firebase Authentication (Email/Password + Google OAuth)
- Real-time AI chat interface
- Budget planning with visual progress bars
- Interactive timeline generator
- Vendor discovery and filtering
- User profile management

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Setup Environment Variables

Copy `.env.example` to `.env` and fill in your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_API_URL=http://localhost:5000
```

### Run Development Server
```bash
npm run dev
```

Access at: http://localhost:3000

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── ChatInput.jsx
│   ├── MessageBubble.jsx
│   ├── ThemeCard.jsx
│   ├── VendorCard.jsx
│   └── ProtectedRoute.jsx
├── pages/              # Page components
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── Dashboard.jsx
│   ├── AIPlannerChat.jsx
│   ├── BudgetPlanner.jsx
│   ├── TimelineGenerator.jsx
│   ├── VendorRecommendations.jsx
│   └── UserProfile.jsx
├── context/            # React Context
│   └── AuthContext.jsx
├── config/             # Configuration
│   └── firebase.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Styling

This project uses Tailwind CSS with custom configuration for wedding themes:

- Custom color palette (pink, purple, orange)
- Custom fonts (Inter, Playfair Display)
- Gradient backgrounds
- Custom components (buttons, cards, inputs)

## 🔐 Authentication

Authentication is handled by Firebase Auth with:
- Email/Password authentication
- Google OAuth
- Protected routes
- Persistent auth state

## 📱 Pages

1. **Landing Page** - Marketing homepage
2. **Login/Register** - Authentication pages
3. **Dashboard** - Overview of wedding planning progress
4. **AI Chat** - Conversational AI assistant
5. **Budget Planner** - Budget tracking and management
6. **Timeline** - Wedding day schedule
7. **Vendors** - Browse and discover vendors
8. **Profile** - User profile and wedding details

## 🛠️ Technologies

- React 18
- Vite
- Tailwind CSS
- React Router v6
- Firebase Auth
- Axios
- Lucide React Icons

## 📦 Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.22.0",
  "firebase": "^10.8.0",
  "axios": "^1.6.7",
  "lucide-react": "^0.344.0"
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variables in Vercel dashboard

### Build Output

The production build will be in the `dist/` directory.

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.cjs` - ESLint configuration

## 💡 Tips

- Use the AI chat for wedding planning advice
- Generate budgets automatically based on your total budget
- Filter vendors by category and rating
- Update your profile with wedding details for personalized recommendations

## 🐛 Troubleshooting

### Firebase Auth Issues
- Verify Firebase configuration in `.env`
- Check Firebase console for enabled auth methods
- Ensure domains are whitelisted in Firebase

### Build Issues
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

### API Connection Issues
- Verify `VITE_API_URL` points to running backend
- Check CORS settings in backend

## 📄 License

ISC
