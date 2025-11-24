import { Star, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const VendorCard = ({ vendor }) => {
  return (
    <div className="card">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/3">
          <img
            src={vendor.image || 'https://via.placeholder.com/300x200?text=Vendor'}
            alt={vendor.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        
        <div className="md:w-2/3">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{vendor.name}</h3>
              <p className="text-primary-600 font-medium">{vendor.category}</p>
            </div>
            
            <div className="flex items-center space-x-1 bg-yellow-100 px-3 py-1 rounded-full">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{vendor.rating || 'N/A'}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">{vendor.description}</p>
          
          <div className="space-y-2 mb-4">
            {vendor.location && (
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {vendor.location}
              </div>
            )}
            
            {vendor.phone && (
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                {vendor.phone}
              </div>
            )}
            
            {vendor.email && (
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                {vendor.email}
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary-600">
              ${vendor.priceRange || 'Contact'}
            </span>
            
            <button className="btn-secondary flex items-center space-x-2">
              <span>View Details</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
