import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Calendar, Heart, Save } from 'lucide-react';

const UserProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    displayName: user?.displayName || '',
    email: user?.email || '',
    weddingDate: '',
    partnerName: '',
    venue: '',
    guestCount: '',
    budget: '',
    theme: ''
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Save to backend
    alert('Profile updated successfully!');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 flex items-center">
                <User className="h-10 w-10 text-primary-500 mr-3" />
                My Profile
              </h1>
              <p className="text-gray-600 mt-2">Manage your wedding planning profile</p>
            </div>

            <div className="card">
              {/* Profile Header */}
              <div className="flex items-center space-x-6 mb-8 pb-8 border-b">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white text-4xl font-bold">
                  {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{user?.displayName || 'User'}</h2>
                  <p className="text-gray-600">{user?.email}</p>
                  <button className="mt-2 text-primary-600 hover:text-primary-700 font-semibold">
                    Change Photo
                  </button>
                </div>
              </div>

              {/* Profile Form */}
              <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="displayName"
                      value={profile.displayName}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      className="input-field bg-gray-100"
                      disabled
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      name="weddingDate"
                      value={profile.weddingDate}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Heart className="inline h-4 w-4 mr-1" />
                      Partner's Name
                    </label>
                    <input
                      type="text"
                      name="partnerName"
                      value={profile.partnerName}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Partner's name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Venue
                    </label>
                    <input
                      type="text"
                      name="venue"
                      value={profile.venue}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Wedding venue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Guest Count
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={profile.guestCount}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Number of guests"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget
                    </label>
                    <input
                      type="number"
                      name="budget"
                      value={profile.budget}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Total budget"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Wedding Theme
                    </label>
                    <select
                      name="theme"
                      value={profile.theme}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select a theme</option>
                      <option value="classic">Classic & Elegant</option>
                      <option value="romantic">Romantic Garden</option>
                      <option value="modern">Modern Minimalist</option>
                      <option value="rustic">Rustic Charm</option>
                      <option value="beach">Beach Wedding</option>
                      <option value="vintage">Vintage</option>
                    </select>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <button type="submit" className="btn-primary flex items-center space-x-2">
                    <Save className="h-5 w-5" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserProfile;
