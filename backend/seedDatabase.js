import Vendor from './models/Vendor.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const sampleVendors = [
  {
    name: 'Grand Palace Hotel',
    category: 'Venue',
    description: 'Elegant ballroom with stunning city views, perfect for weddings of 100-300 guests. Features include chandelier lighting, marble floors, and outdoor terrace.',
    location: 'Downtown, City Center',
    contact: {
      phone: '(555) 123-4567',
      email: 'events@grandpalace.com',
      website: 'https://grandpalacehotel.com'
    },
    priceRange: {
      min: 5000,
      max: 10000,
      currency: 'USD'
    },
    rating: 4.8,
    services: ['Indoor venue', 'Outdoor terrace', 'Catering kitchen', 'Bridal suite', 'Parking'],
    verified: true,
    featured: true
  },
  {
    name: 'Bella Cuisine Catering',
    category: 'Catering',
    description: 'Award-winning catering service specializing in custom menus for weddings. Farm-to-table ingredients, dietary accommodations available.',
    location: 'Multiple Locations',
    contact: {
      phone: '(555) 234-5678',
      email: 'hello@bellacuisine.com',
      website: 'https://bellacuisine.com'
    },
    priceRange: {
      min: 50,
      max: 150,
      currency: 'USD'
    },
    rating: 4.9,
    services: ['Custom menus', 'Buffet service', 'Plated dinners', 'Appetizers', 'Desserts', 'Staff'],
    verified: true,
    featured: true
  },
  {
    name: 'John Smith Photography',
    category: 'Photography',
    description: 'Professional wedding photographer with 15 years of experience. Specializes in candid moments and artistic portraits.',
    location: 'Available Nationwide',
    contact: {
      phone: '(555) 345-6789',
      email: 'john@smithphoto.com',
      website: 'https://johnsmithphoto.com'
    },
    priceRange: {
      min: 2500,
      max: 5000,
      currency: 'USD'
    },
    rating: 5.0,
    services: ['8-hour coverage', 'Engagement shoot', 'Online gallery', 'Prints', 'Photo album'],
    verified: true,
    featured: true
  },
  {
    name: 'Rose Garden Florist',
    category: 'Florist',
    description: 'Beautiful custom floral arrangements for weddings. Specializes in romantic, garden-style designs with seasonal blooms.',
    location: 'Garden District',
    contact: {
      phone: '(555) 456-7890',
      email: 'info@rosegarden.com',
      website: 'https://rosegardenfloral.com'
    },
    priceRange: {
      min: 1500,
      max: 4000,
      currency: 'USD'
    },
    rating: 4.7,
    services: ['Bridal bouquet', 'Boutonnieres', 'Centerpieces', 'Ceremony arch', 'Delivery & setup'],
    verified: true,
    featured: false
  },
  {
    name: 'Rhythm & Beats DJ Service',
    category: 'Music/DJ',
    description: 'Professional DJ service for weddings with extensive music library. MC services and lighting packages available.',
    location: 'Metro Area',
    contact: {
      phone: '(555) 567-8901',
      email: 'bookings@rhythmbeats.com',
      website: 'https://rhythmbeats.com'
    },
    priceRange: {
      min: 1200,
      max: 2500,
      currency: 'USD'
    },
    rating: 4.6,
    services: ['DJ service', 'MC hosting', 'Sound system', 'Lighting', 'Music consultation'],
    verified: true,
    featured: false
  },
  {
    name: 'Sweet Dreams Bakery',
    category: 'Cake',
    description: 'Custom wedding cakes and desserts. Specializes in elegant designs and delicious flavors with free tasting session.',
    location: 'Westside',
    contact: {
      phone: '(555) 678-9012',
      email: 'orders@sweetdreamsbakery.com',
      website: 'https://sweetdreamsbakery.com'
    },
    priceRange: {
      min: 500,
      max: 2000,
      currency: 'USD'
    },
    rating: 4.8,
    services: ['Custom cake design', 'Tasting session', 'Delivery', 'Cupcakes', 'Dessert table'],
    verified: true,
    featured: false
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing vendors
    await Vendor.deleteMany({});
    console.log('🗑️  Cleared existing vendors');

    // Insert sample vendors
    await Vendor.insertMany(sampleVendors);
    console.log('✅ Inserted sample vendors');

    console.log(`📊 Total vendors: ${sampleVendors.length}`);
    console.log('🎉 Database seeded successfully!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
