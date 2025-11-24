import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { Calendar, Clock, CheckCircle, Sparkles } from 'lucide-react';

const TimelineGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [timeline, setTimeline] = useState([
    {
      time: '10:00 AM',
      event: 'Guest Arrival',
      duration: '30 min',
      status: 'pending'
    },
    {
      time: '10:30 AM',
      event: 'Ceremony Begins',
      duration: '45 min',
      status: 'pending'
    },
    {
      time: '11:15 AM',
      event: 'Photo Session',
      duration: '1 hour',
      status: 'pending'
    },
    {
      time: '12:30 PM',
      event: 'Cocktail Hour',
      duration: '1 hour',
      status: 'pending'
    },
    {
      time: '1:30 PM',
      event: 'Reception & Lunch',
      duration: '2 hours',
      status: 'pending'
    },
    {
      time: '3:30 PM',
      event: 'First Dance',
      duration: '15 min',
      status: 'pending'
    },
    {
      time: '4:00 PM',
      event: 'Cake Cutting',
      duration: '30 min',
      status: 'pending'
    },
    {
      time: '5:00 PM',
      event: 'Send-off',
      duration: '30 min',
      status: 'pending'
    }
  ]);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const handleGenerateTimeline = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/api/ai/generateTimeline`, {
        weddingType: 'Traditional',
        startTime: '10:00 AM',
        duration: '8 hours'
      });
      
      if (response.data.timeline) {
        setTimeline(response.data.timeline);
      }
    } catch (error) {
      console.error('Error generating timeline:', error);
      alert('Failed to generate timeline. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 flex items-center">
                  <Calendar className="h-10 w-10 text-primary-500 mr-3" />
                  Wedding Timeline
                </h1>
                <p className="text-gray-600 mt-2">Plan your perfect day schedule</p>
              </div>
              
              <button 
                onClick={handleGenerateTimeline}
                disabled={loading}
                className="btn-primary flex items-center space-x-2"
              >
                <Sparkles className="h-5 w-5" />
                <span>{loading ? 'Generating...' : 'AI Generate Timeline'}</span>
              </button>
            </div>

            {/* Timeline */}
            <div className="card">
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 relative">
                    {/* Timeline Line */}
                    {index !== timeline.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary-200" />
                    )}
                    
                    {/* Time Circle */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold shadow-lg z-10 relative">
                        <Clock className="h-6 w-6" />
                      </div>
                    </div>
                    
                    {/* Event Details */}
                    <div className="flex-1 pb-8">
                      <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{item.event}</h3>
                            <p className="text-primary-600 font-semibold">{item.time}</p>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">{item.duration}</span>
                            {item.status === 'completed' && (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            )}
                          </div>
                        </div>
                        
                        <div className="mt-3 flex gap-2">
                          <button className="btn-secondary text-sm px-3 py-1">
                            Edit
                          </button>
                          <button className="btn-secondary text-sm px-3 py-1">
                            Mark Complete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Event Button */}
            <div className="mt-6">
              <button className="w-full btn-secondary py-4">
                + Add Custom Event
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TimelineGenerator;
