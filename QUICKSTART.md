# Quick Start Commands

## Initial Setup (One Time)

```bash
# Install all dependencies
npm run install:all

# Setup environment files
cd frontend && cp .env.example .env
cd ../backend && cp .env.example .env

# Edit .env files with your credentials
```

## Development

```bash
# Run both frontend and backend
npm run dev

# Or run separately:
npm run dev:frontend    # Run frontend only
npm run dev:backend     # Run backend only
```

## Access URLs

- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Health Check: http://localhost:5000/health

## Build

```bash
# Build frontend
cd frontend
npm run build

# Preview frontend build
npm run preview
```

## Useful Commands

```bash
# Check if MongoDB is running
mongosh

# Test backend health
curl http://localhost:5000/health

# Test AI chat endpoint
curl -X POST http://localhost:5000/api/ai/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'
```

## Troubleshooting

```bash
# Clear all node_modules and reinstall
rm -rf node_modules frontend/node_modules backend/node_modules
npm run install:all

# Kill process on port
lsof -ti:5000 | xargs kill -9   # Backend
lsof -ti:3000 | xargs kill -9   # Frontend
```

## Deployment

```bash
# Frontend to Vercel
cd frontend
vercel

# Backend to Railway
# Connect via Railway dashboard
```
