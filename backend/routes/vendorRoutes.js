import express from 'express';
import Vendor from '../models/Vendor.js';

const router = express.Router();

// Get all vendors
router.get('/', async (req, res) => {
  try {
    const { category, search, minPrice, maxPrice, rating } = req.query;
    
    let query = {};
    
    // Filter by category
    if (category && category !== 'All') {
      query.category = category;
    }
    
    // Search by name or description
    if (search) {
      query.$text = { $search: search };
    }
    
    // Filter by price range
    if (minPrice || maxPrice) {
      query['priceRange.min'] = {};
      if (minPrice) query['priceRange.min'].$gte = parseInt(minPrice);
      if (maxPrice) query['priceRange.max'].$lte = parseInt(maxPrice);
    }
    
    // Filter by rating
    if (rating) {
      query.rating = { $gte: parseFloat(rating) };
    }
    
    const vendors = await Vendor.find(query).sort({ featured: -1, rating: -1 });
    
    res.json(vendors);
  } catch (error) {
    console.error('Error fetching vendors:', error);
    res.status(500).json({ error: 'Failed to fetch vendors' });
  }
});

// Get vendor by ID
router.get('/:id', async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    
    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }
    
    res.json(vendor);
  } catch (error) {
    console.error('Error fetching vendor:', error);
    res.status(500).json({ error: 'Failed to fetch vendor' });
  }
});

// Create new vendor
router.post('/', async (req, res) => {
  try {
    const vendor = new Vendor(req.body);
    await vendor.save();
    
    res.status(201).json({ 
      message: 'Vendor created successfully',
      vendor 
    });
  } catch (error) {
    console.error('Error creating vendor:', error);
    res.status(500).json({ error: 'Failed to create vendor' });
  }
});

// Update vendor
router.put('/:id', async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    
    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }
    
    res.json({ 
      message: 'Vendor updated successfully',
      vendor 
    });
  } catch (error) {
    console.error('Error updating vendor:', error);
    res.status(500).json({ error: 'Failed to update vendor' });
  }
});

// Delete vendor
router.delete('/:id', async (req, res) => {
  try {
    const vendor = await Vendor.findByIdAndDelete(req.params.id);
    
    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }
    
    res.json({ message: 'Vendor deleted successfully' });
  } catch (error) {
    console.error('Error deleting vendor:', error);
    res.status(500).json({ error: 'Failed to delete vendor' });
  }
});

// Add review to vendor
router.post('/:id/review', async (req, res) => {
  try {
    const { userId, rating, comment } = req.body;
    
    const vendor = await Vendor.findById(req.params.id);
    
    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }
    
    vendor.reviews.push({
      userId,
      rating,
      comment
    });
    
    // Recalculate average rating
    const avgRating = vendor.reviews.reduce((sum, review) => sum + review.rating, 0) / vendor.reviews.length;
    vendor.rating = Math.round(avgRating * 10) / 10;
    
    await vendor.save();
    
    res.json({ 
      message: 'Review added successfully',
      vendor 
    });
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ error: 'Failed to add review' });
  }
});

export default router;
