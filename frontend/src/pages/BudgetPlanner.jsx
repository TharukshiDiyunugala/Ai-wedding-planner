import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { DollarSign, Plus, Trash2, Sparkles } from 'lucide-react';

const BudgetPlanner = () => {
  const [budget, setBudget] = useState({
    total: 30000,
    categories: [
      { name: 'Venue', allocated: 10000, spent: 8500 },
      { name: 'Catering', allocated: 8000, spent: 0 },
      { name: 'Photography', allocated: 3000, spent: 3000 },
      { name: 'Flowers', allocated: 2000, spent: 1500 },
      { name: 'Music/DJ', allocated: 2000, spent: 0 },
      { name: 'Dress & Attire', allocated: 3000, spent: 2200 },
      { name: 'Decorations', allocated: 2000, spent: 800 }
    ]
  });

  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const totalSpent = budget.categories.reduce((sum, cat) => sum + cat.spent, 0);
  const totalAllocated = budget.categories.reduce((sum, cat) => sum + cat.allocated, 0);

  const handleGenerateAIBudget = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/api/ai/generateBudget`, {
        totalBudget: budget.total,
        preferences: 'standard wedding'
      });
      
      if (response.data.budget) {
        setBudget(response.data.budget);
      }
    } catch (error) {
      console.error('Error generating budget:', error);
      alert('Failed to generate AI budget. Please try again.');
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
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 flex items-center">
                  <DollarSign className="h-10 w-10 text-primary-500 mr-3" />
                  Budget Planner
                </h1>
                <p className="text-gray-600 mt-2">Manage your wedding expenses</p>
              </div>
              
              <button 
                onClick={handleGenerateAIBudget}
                disabled={loading}
                className="btn-primary flex items-center space-x-2"
              >
                <Sparkles className="h-5 w-5" />
                <span>{loading ? 'Generating...' : 'AI Budget Suggestions'}</span>
              </button>
            </div>

            {/* Budget Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card">
                <p className="text-gray-600 mb-2">Total Budget</p>
                <p className="text-4xl font-bold text-gray-900">
                  ${budget.total.toLocaleString()}
                </p>
              </div>
              
              <div className="card">
                <p className="text-gray-600 mb-2">Total Spent</p>
                <p className="text-4xl font-bold text-primary-600">
                  ${totalSpent.toLocaleString()}
                </p>
              </div>
              
              <div className="card">
                <p className="text-gray-600 mb-2">Remaining</p>
                <p className="text-4xl font-bold text-green-600">
                  ${(budget.total - totalSpent).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Budget Categories */}
            <div className="card">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Budget Breakdown</h2>
                <button className="btn-secondary flex items-center space-x-2">
                  <Plus className="h-5 w-5" />
                  <span>Add Category</span>
                </button>
              </div>

              <div className="space-y-4">
                {budget.categories.map((category, index) => {
                  const percentage = (category.spent / category.allocated) * 100;
                  
                  return (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg">{category.name}</h3>
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Spent: ${category.spent.toLocaleString()}</span>
                        <span>Budget: ${category.allocated.toLocaleString()}</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full transition-all ${
                            percentage > 100 
                              ? 'bg-red-500' 
                              : percentage > 80 
                              ? 'bg-yellow-500' 
                              : 'bg-green-500'
                          }`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                      
                      <p className="text-sm text-gray-600 mt-1">
                        {percentage.toFixed(0)}% used
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BudgetPlanner;
