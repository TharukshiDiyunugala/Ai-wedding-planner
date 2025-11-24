import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard'
import AIPlannerChat from './pages/AIPlannerChat'
import BudgetPlanner from './pages/BudgetPlanner'
import TimelineGenerator from './pages/TimelineGenerator'
import VendorRecommendations from './pages/VendorRecommendations'
import UserProfile from './pages/UserProfile'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        <Route path="/ai-chat" element={
          <ProtectedRoute>
            <AIPlannerChat />
          </ProtectedRoute>
        } />
        
        <Route path="/budget" element={
          <ProtectedRoute>
            <BudgetPlanner />
          </ProtectedRoute>
        } />
        
        <Route path="/timeline" element={
          <ProtectedRoute>
            <TimelineGenerator />
          </ProtectedRoute>
        } />
        
        <Route path="/vendors" element={
          <ProtectedRoute>
            <VendorRecommendations />
          </ProtectedRoute>
        } />
        
        <Route path="/profile" element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  )
}

export default App
