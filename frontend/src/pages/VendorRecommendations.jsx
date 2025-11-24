import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import VendorCard from '../components/VendorCard';
import axios from 'axios';
import { Users, Search, Filter } from 'lucide-react';

const VendorRecommendations = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const categories = [
    'All',
    'Venue',
    'Catering',
    'Photography',
    'Florist',
    'Music/DJ',
    'Cake',
    'Decorations'
  ];

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/vendors`);
      setVendors(response.data);
    } catch (error) {
      console.error('Error fetching vendors:', error);
      // Fallback to sample data
      setVendors([
        {
          name: 'Grand Palace Hotel',
          category: 'Venue',
          description: 'Elegant ballroom with stunning city views, perfect for large weddings',
          location: 'Downtown, City Center',
          phone: '(555) 123-4567',
          email: 'info@grandpalace.com',
          rating: 4.8,
          priceRange: '5000-10000',
          image: 'https://via.placeholder.com/300x200?text=Grand+Palace'
        },
        {
          name: 'Bella Cuisine Catering',
          category: 'Catering',
          description: 'Award-winning catering service with diverse menu options',
          location: 'Multiple Locations',
          phone: '(555) 234-5678',
          email: 'hello@bellacuisine.com',
          rating: 4.9,
          priceRange: '50-100 per person',
          image: 'https://via.placeholder.com/300x200?text=Bella+Cuisine'
        },
        {
          name: 'John Smith Photography',
          category: 'Photography',
          description: 'Professional wedding photographer with 15 years of experience',
          location: 'Available Nationwide',
          phone: '(555) 345-6789',
          email: 'john@smithphoto.com',
          rating: 5.0,
          priceRange: '2500-4000',
          image: 'https://via.placeholder.com/300x200?text=Photography'
        },
        {
          name: 'Rose Garden Florist',
          category: 'Florist',
          description: 'Beautiful custom floral arrangements for your special day',
          location: 'Garden District',
          phone: '(555) 456-7890',
          email: 'info@rosegarden.com',
          rating: 4.7,
          priceRange: '1500-3000',
          image: 'https://via.placeholder.com/300x200?text=Florist'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || vendor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 flex items-center">
                <Users className="h-10 w-10 text-primary-500 mr-3" />
                Vendor Recommendations
              </h1>
              <p className="text-gray-600 mt-2">Find the perfect vendors for your wedding</p>
            </div>

            {/* Search and Filter */}
            <div className="card mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search vendors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-field pl-10"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="input-field"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Vendors List */}
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500 mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading vendors...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredVendors.length > 0 ? (
                  filteredVendors.map((vendor, index) => (
                    <VendorCard key={index} vendor={vendor} />
                  ))
                ) : (
                  <div className="text-center py-12 card">
                    <p className="text-gray-600 text-lg">No vendors found matching your criteria</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VendorRecommendations;
