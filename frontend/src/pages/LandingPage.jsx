import { Link } from 'react-router-dom';
import { Heart, Sparkles, Calendar, DollarSign, Users, MessageSquare, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'AI Wedding Assistant',
      description: 'Chat with our AI to get personalized wedding planning advice 24/7'
    },
    {
      icon: DollarSign,
      title: 'Smart Budget Planning',
      description: 'AI-powered budget recommendations based on your preferences and location'
    },
    {
      icon: Calendar,
      title: 'Timeline Generator',
      description: 'Automatically create a detailed timeline for your perfect day'
    },
    {
      icon: Users,
      title: 'Vendor Recommendations',
      description: 'Get matched with the best vendors for your wedding style and budget'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                AI Wedding Planner
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-primary-500 transition">
                Login
              </Link>
              <Link to="/register" className="btn-primary">
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-primary-600" />
            <span className="text-primary-700 font-semibold">AI-Powered Wedding Planning</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Plan Your Dream Wedding
            <span className="block bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              With AI Magic
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let artificial intelligence help you create the perfect wedding. From budget planning to vendor recommendations, 
            we've got everything covered.
          </p>
          
          <Link to="/register" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2">
            <span>Start Planning Now</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Everything You Need to Plan Your Perfect Day
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Planning?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of couples who planned their dream wedding with AI assistance
          </p>
          <Link to="/register" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-flex items-center space-x-2">
            <span>Create Free Account</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>&copy; 2025 AI Wedding Planner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
