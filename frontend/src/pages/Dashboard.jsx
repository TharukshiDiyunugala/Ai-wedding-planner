import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../context/AuthContext';
import { 
  Heart, 
  Calendar, 
  DollarSign, 
  Users, 
  CheckCircle,
  TrendingUp 
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      icon: Calendar,
      title: 'Days Until Wedding',
      value: '120',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: DollarSign,
      title: 'Budget Used',
      value: '65%',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: CheckCircle,
      title: 'Tasks Completed',
      value: '24/50',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Guests Confirmed',
      value: '85/150',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const recentActivities = [
    'Booked venue - Grand Palace Hotel',
    'Confirmed photographer - John Smith Photography',
    'Selected wedding theme - Romantic Garden',
    'Sent invitations to 150 guests'
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Welcome back, {user?.displayName || 'there'}! 💕
              </h1>
              <p className="text-gray-600">Here's what's happening with your wedding planning</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="card">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stat.color} mb-4`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 text-primary-500 mr-2" />
                  Recent Activity
                </h2>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Heart className="h-6 w-6 text-primary-500 mr-2" />
                  Quick Actions
                </h2>
                <div className="space-y-3">
                  <button className="w-full btn-primary text-left flex items-center justify-between">
                    <span>Chat with AI Assistant</span>
                    <span>→</span>
                  </button>
                  <button className="w-full btn-secondary text-left flex items-center justify-between">
                    <span>Update Budget</span>
                    <span>→</span>
                  </button>
                  <button className="w-full btn-secondary text-left flex items-center justify-between">
                    <span>Generate Timeline</span>
                    <span>→</span>
                  </button>
                  <button className="w-full btn-secondary text-left flex items-center justify-between">
                    <span>Browse Vendors</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
