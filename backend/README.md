# Backend README

## AI Wedding Planner - Backend

Node.js + Express backend API with MongoDB and OpenAI integration.

## 🚀 Features

- RESTful API architecture
- MongoDB database with Mongoose ODM
- OpenAI GPT integration for AI features
- User authentication integration with Firebase
- Vendor management system
- Security middleware (Helmet, CORS, Rate Limiting)
- Request logging

## 🏃 Quick Start

### Install Dependencies
```bash
npm install
```

### Setup Environment Variables

Copy `.env.example` to `.env` and configure:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/ai-wedding-planner
OPENAI_API_KEY=sk-your_openai_api_key
FRONTEND_URL=http://localhost:3000
```

### Run Development Server
```bash
npm run dev
```

### Run Production Server
```bash
npm start
```

Server runs on: http://localhost:5000

## 📁 Project Structure

```
backend/
├── models/              # Mongoose models
│   ├── User.js
│   ├── WeddingPlan.js
│   └── Vendor.js
├── routes/              # API routes
│   ├── authRoutes.js
│   ├── aiRoutes.js
│   └── vendorRoutes.js
├── controllers/         # Route controllers
│   └── aiController.js
├── utils/               # Utility functions
│   └── openai.js
├── server.js            # Entry point
├── package.json
└── .env.example
```

## 🗄️ Database Models

### User Model
- Firebase UID
- Email, display name, photo
- Wedding details (date, venue, budget, theme)
- Timestamps

### WeddingPlan Model
- User reference
- Wedding date
- Theme, budget, timeline
- Vendor references
- Guest list
- Tasks and notes

### Vendor Model
- Name, category, description
- Location and contact info
- Price range and rating
- Reviews and images
- Availability

## 🛣️ API Routes

### Authentication
- `POST /api/auth/saveUser` - Save/update user
- `GET /api/auth/user/:uid` - Get user profile
- `PUT /api/auth/user/:uid` - Update user profile

### AI Features
- `POST /api/ai/chat` - AI chat responses
- `POST /api/ai/generateBudget` - Generate budget recommendations
- `POST /api/ai/generateTimeline` - Generate wedding timeline
- `POST /api/ai/generateTheme` - Generate theme suggestions

### Vendors
- `GET /api/vendors` - Get all vendors (with filters)
- `GET /api/vendors/:id` - Get vendor by ID
- `POST /api/vendors` - Create vendor
- `PUT /api/vendors/:id` - Update vendor
- `DELETE /api/vendors/:id` - Delete vendor
- `POST /api/vendors/:id/review` - Add review

## 🤖 OpenAI Integration

The backend uses OpenAI's GPT-3.5-turbo model for:

1. **Chat Responses** - Contextual wedding planning advice
2. **Budget Generation** - Smart budget allocation
3. **Timeline Creation** - Optimal wedding day schedules
4. **Theme Suggestions** - Personalized theme recommendations

### OpenAI Utility Functions

```javascript
// Generate simple response
generateOpenAIResponse(prompt, systemMessage, maxTokens)

// Generate with conversation history
generateOpenAIResponseWithHistory(messages, maxTokens)

// Generate structured JSON response
generateStructuredResponse(prompt, systemMessage)
```

## 🔒 Security

- **Helmet.js** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - 100 requests per 15 minutes
- **Environment Variables** - Sensitive data protection
- **Mongoose** - MongoDB injection prevention

## 📊 Database Setup

### Local MongoDB

1. Install MongoDB:
```bash
# macOS
brew install mongodb-community

# Ubuntu
sudo apt-get install mongodb

# Windows
Download from mongodb.com
```

2. Start MongoDB:
```bash
mongod
```

### MongoDB Atlas (Cloud)

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Create database user
4. Whitelist IP address
5. Get connection string
6. Update `MONGODB_URI` in `.env`

## 🧪 Testing API

### Health Check
```bash
curl http://localhost:5000/health
```

### Test AI Chat
```bash
curl -X POST http://localhost:5000/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Help me plan a wedding"}'
```

### Test Vendor Retrieval
```bash
curl http://localhost:5000/api/vendors?category=Photography
```

## 📦 Dependencies

### Production
- express - Web framework
- mongoose - MongoDB ODM
- openai - OpenAI API client
- dotenv - Environment variables
- cors - CORS middleware
- helmet - Security middleware
- express-rate-limit - Rate limiting
- morgan - Request logging

### Development
- nodemon - Auto-restart on changes

## 🚀 Deployment

### Railway (Recommended)

1. Create account at [Railway](https://railway.app/)
2. Connect GitHub repository
3. Add environment variables:
   - `MONGODB_URI`
   - `OPENAI_API_KEY`
   - `FRONTEND_URL`
   - `NODE_ENV=production`
4. Deploy automatically

### Other Platforms

Works with:
- Heroku
- DigitalOcean App Platform
- AWS Elastic Beanstalk
- Google Cloud Run

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| PORT | Server port | No (default: 5000) |
| NODE_ENV | Environment | No (default: development) |
| MONGODB_URI | MongoDB connection string | Yes |
| OPENAI_API_KEY | OpenAI API key | Yes |
| FRONTEND_URL | Frontend URL for CORS | Yes |

## 📈 Performance

- Rate limiting prevents API abuse
- MongoDB indexing for fast queries
- Efficient Mongoose queries
- Response compression (optional)

## 🐛 Troubleshooting

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
mongosh

# Check connection string format
mongodb://localhost:27017/ai-wedding-planner
```

### OpenAI API Issues
- Verify API key is valid
- Check API usage limits
- Ensure proper error handling

### CORS Issues
- Verify `FRONTEND_URL` matches frontend
- Check CORS middleware configuration

## 📝 Scripts

```json
{
  "dev": "nodemon server.js",
  "start": "node server.js"
}
```

## 📄 License

ISC

## 🤝 API Best Practices

1. Always validate input data
2. Use proper HTTP status codes
3. Include error messages in responses
4. Log errors for debugging
5. Use environment variables for sensitive data
6. Implement rate limiting
7. Use MongoDB transactions for critical operations

## 📞 Support

For issues or questions, please open an issue in the repository.
