# Deployment Guide

## 🚀 Production Deployment

This guide covers deploying the AI Wedding Planner to production.

---

## Frontend Deployment - Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Code pushed to GitHub repository

### Step-by-Step

1. **Prepare Frontend for Deployment**

```bash
cd frontend
npm run build
# Test the build locally
npm run preview
```

2. **Deploy to Vercel**

**Option A: Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd frontend
vercel

# Follow prompts:
# - Link to existing project or create new
# - Set root directory to 'frontend'
# - Build command: npm run build
# - Output directory: dist
```

**Option B: Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com/)
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

3. **Set Environment Variables**

In Vercel Dashboard → Settings → Environment Variables, add:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_API_URL=https://your-backend-url.railway.app
```

4. **Update Firebase Authorized Domains**
   - Go to Firebase Console → Authentication → Settings → Authorized domains
   - Add your Vercel domain: `your-app.vercel.app`

5. **Redeploy**
   - Push to GitHub or click "Redeploy" in Vercel

---

## Backend Deployment - Railway

### Prerequisites
- GitHub account
- Railway account (free tier available)
- MongoDB Atlas database
- OpenAI API key

### Step-by-Step

1. **Prepare Backend**

Ensure `package.json` has start script:
```json
{
  "scripts": {
    "start": "node server.js"
  }
}
```

2. **Deploy to Railway**

1. Go to [railway.app](https://railway.app/)
2. Click "Start a New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Select `backend` directory as root (or deploy full repo)

3. **Configure Environment Variables**

In Railway Dashboard → Variables, add:

```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai-wedding-planner
OPENAI_API_KEY=sk-your_openai_key
FRONTEND_URL=https://your-app.vercel.app
```

4. **Configure Railway Settings**

- Go to Settings
- Set Root Directory: `backend` (if deploying full repo)
- Start Command: `npm start`
- Build Command: `npm install`

5. **Get Railway URL**

Once deployed, Railway provides a URL like:
`https://your-app.up.railway.app`

6. **Update Frontend**

Update `VITE_API_URL` in Vercel to use Railway URL

7. **Update CORS**

Ensure `FRONTEND_URL` in Railway matches your Vercel URL

---

## Database - MongoDB Atlas

Already set up in development, but verify:

1. **Whitelist IP Addresses**
   - Go to Network Access
   - Add: `0.0.0.0/0` (allow all IPs)
   - Or add specific IPs of Railway servers

2. **Check Connection String**
   - Go to Database → Connect
   - Choose "Connect your application"
   - Copy connection string
   - Update `MONGODB_URI` in Railway

3. **Database Indexes**

Connect to your database and create indexes:
```javascript
db.vendors.createIndex({ name: "text", description: "text", category: "text" })
```

4. **Seed Production Database** (Optional)

```bash
# Set production MongoDB URI in .env
MONGODB_URI=your_production_uri npm run seed
```

---

## Firebase Configuration for Production

1. **Update Authorized Domains**
   - Firebase Console → Authentication → Settings
   - Add production domains:
     - `your-app.vercel.app`
     - Any custom domains

2. **OAuth Configuration**
   - For Google sign-in, ensure domains are authorized
   - Update OAuth consent screen if needed

3. **Security Rules**
   - Review Firebase security rules
   - Ensure production-ready

---

## Custom Domain (Optional)

### Vercel Custom Domain

1. Go to Vercel → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update Firebase authorized domains
5. Update `FRONTEND_URL` in Railway

### Railway Custom Domain

1. Go to Railway → Settings → Domains
2. Add custom domain
3. Update DNS records
4. Update `VITE_API_URL` in Vercel

---

## Environment Variables Summary

### Frontend (Vercel)
```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_API_URL=https://backend.railway.app
```

### Backend (Railway)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://...
OPENAI_API_KEY=sk-...
FRONTEND_URL=https://frontend.vercel.app
```

---

## Post-Deployment Checklist

- [ ] Frontend deployed and accessible
- [ ] Backend deployed and accessible
- [ ] Database connected
- [ ] Environment variables set
- [ ] Firebase domains authorized
- [ ] CORS configured correctly
- [ ] Test registration/login
- [ ] Test AI chat functionality
- [ ] Test all pages load correctly
- [ ] Check browser console for errors
- [ ] Verify API endpoints work
- [ ] Test mobile responsiveness

---

## Monitoring & Maintenance

### Vercel
- Monitor deployments in dashboard
- Check build logs for errors
- Set up Vercel Analytics (optional)

### Railway
- Monitor metrics in dashboard
- Check logs for errors
- Set up usage alerts

### MongoDB Atlas
- Monitor database performance
- Set up backup policies
- Review connection metrics

### OpenAI
- Monitor API usage
- Set spending limits
- Check rate limits

---

## CI/CD Setup (Optional)

### Automatic Deployments

**Vercel**: Automatically deploys on push to main branch

**Railway**: Automatically deploys on push to main branch

### GitHub Actions (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to Vercel
      run: |
        npm install -g vercel
        cd frontend
        vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
    
    - name: Deploy to Railway
      run: |
        # Railway auto-deploys from GitHub
        echo "Railway will auto-deploy"
```

---

## Troubleshooting

### Deployment Fails

**Vercel**:
- Check build logs
- Verify all dependencies in package.json
- Ensure environment variables are set
- Test build locally: `npm run build`

**Railway**:
- Check deploy logs
- Verify start command
- Ensure MongoDB connection string is correct
- Check environment variables

### 502 Bad Gateway

- Backend may be down
- Check Railway logs
- Verify MongoDB connection
- Check OpenAI API key validity

### CORS Errors

- Verify `FRONTEND_URL` in Railway matches Vercel URL
- Check CORS configuration in backend
- Ensure protocol matches (https)

### Firebase Auth Errors

- Verify domain is authorized in Firebase
- Check Firebase config in frontend
- Ensure auth methods are enabled

---

## Rollback

### Vercel
- Go to Deployments
- Find previous working deployment
- Click "Promote to Production"

### Railway
- Go to Deployments
- Select previous deployment
- Click "Redeploy"

---

## Backup Strategy

### Database Backups
- MongoDB Atlas has automatic backups
- Configure backup schedule in Atlas
- Test restore procedure

### Code Backups
- Code is in GitHub (version control)
- Create release tags for stable versions
- Keep production branch stable

---

## Security Checklist

- [ ] Environment variables are secret
- [ ] API keys are not exposed
- [ ] CORS is properly configured
- [ ] Rate limiting is enabled
- [ ] HTTPS is enforced
- [ ] Firebase security rules are set
- [ ] MongoDB has authentication
- [ ] Regular dependency updates

---

## Cost Optimization

### Free Tier Limits

**Vercel**: 100GB bandwidth/month (hobby plan)
**Railway**: $5 free credit/month
**MongoDB Atlas**: 512MB storage (free tier)
**OpenAI**: Pay per use (set spending limits)

### Tips
- Monitor usage regularly
- Set up billing alerts
- Optimize database queries
- Cache API responses where possible
- Compress images and assets

---

## Support

For deployment issues:
- Check platform documentation
- Review deployment logs
- Open issue in repository
- Contact platform support

---

**Congratulations! Your AI Wedding Planner is now live! 🎉**
