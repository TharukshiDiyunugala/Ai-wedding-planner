# System Architecture

## Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     AI WEDDING PLANNER                      │
│                    Full-Stack Architecture                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│                    (React + Vite)                            │
│                   Port: 3000                                 │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Landing  │  │  Login   │  │ Register │  │Dashboard │  │
│  │   Page   │  │   Page   │  │   Page   │  │          │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ AI Chat  │  │  Budget  │  │ Timeline │  │ Vendors  │  │
│  │          │  │  Planner │  │Generator │  │          │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                              │
│  ┌──────────┐                                               │
│  │ Profile  │                                               │
│  │          │                                               │
│  └──────────┘                                               │
│                                                              │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ HTTP/HTTPS
                       │ REST API
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                       BACKEND                                │
│                   (Node.js + Express)                        │
│                     Port: 5000                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              MIDDLEWARE                             │    │
│  │  • Helmet (Security)                               │    │
│  │  • CORS (Cross-Origin)                             │    │
│  │  • Rate Limiter (100 req/15min)                    │    │
│  │  • Morgan (Logging)                                │    │
│  │  • Body Parser                                     │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │                API ROUTES                           │    │
│  │                                                     │    │
│  │  /api/auth/*        → Authentication               │    │
│  │  /api/ai/*          → AI Features                  │    │
│  │  /api/vendors/*     → Vendor Management            │    │
│  │  /health            → Health Check                 │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              CONTROLLERS                            │    │
│  │  • AI Controller (Chat, Budget, Timeline, Themes)  │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
└──────────────┬─────────────────────┬─────────────────┬─────┘
               │                     │                 │
               │                     │                 │
               ▼                     ▼                 ▼
┌──────────────────────┐  ┌─────────────────┐  ┌─────────────┐
│    FIREBASE AUTH     │  │   OPENAI API    │  │  MONGODB    │
│                      │  │                 │  │             │
│  • Email/Password    │  │  • GPT-3.5      │  │ • Users     │
│  • Google OAuth      │  │  • Chat         │  │ • Vendors   │
│  • User Management   │  │  • Generation   │  │ • Plans     │
│                      │  │                 │  │             │
└──────────────────────┘  └─────────────────┘  └─────────────┘
```

## Data Flow

```
┌─────────────┐
│    USER     │
└──────┬──────┘
       │
       │ 1. Visit Site
       ▼
┌──────────────────┐
│  LANDING PAGE    │
└──────┬───────────┘
       │
       │ 2. Register/Login
       ▼
┌──────────────────┐      ┌──────────────────┐
│  LOGIN PAGE      │─────▶│  FIREBASE AUTH   │
└──────┬───────────┘      └──────────────────┘
       │
       │ 3. Save User Data
       ▼
┌──────────────────┐      ┌──────────────────┐
│  BACKEND API     │─────▶│    MONGODB       │
└──────┬───────────┘      └──────────────────┘
       │
       │ 4. Redirect to Dashboard
       ▼
┌──────────────────┐
│   DASHBOARD      │
└──────────────────┘
```

## AI Chat Flow

```
┌─────────────┐
│    USER     │
└──────┬──────┘
       │
       │ 1. Type Message
       ▼
┌──────────────────┐
│  AI CHAT PAGE    │
└──────┬───────────┘
       │
       │ 2. Send to Backend
       ▼
┌──────────────────┐
│  BACKEND API     │
│  /api/ai/chat    │
└──────┬───────────┘
       │
       │ 3. Process with Context
       ▼
┌──────────────────┐
│  AI CONTROLLER   │
└──────┬───────────┘
       │
       │ 4. Call OpenAI
       ▼
┌──────────────────┐
│   OPENAI API     │
│   GPT-3.5-turbo  │
└──────┬───────────┘
       │
       │ 5. Return Response
       ▼
┌──────────────────┐
│  AI CHAT PAGE    │
│  Display Reply   │
└──────────────────┘
```

## Budget Generation Flow

```
┌─────────────┐
│    USER     │
└──────┬──────┘
       │
       │ 1. Click "Generate Budget"
       ▼
┌──────────────────┐
│ BUDGET PLANNER   │
└──────┬───────────┘
       │
       │ 2. Send Request
       │    (total budget, preferences)
       ▼
┌──────────────────┐
│  BACKEND API     │
│ /api/ai/generate │
│      Budget      │
└──────┬───────────┘
       │
       │ 3. Create Prompt
       ▼
┌──────────────────┐
│  AI CONTROLLER   │
└──────┬───────────┘
       │
       │ 4. Generate with AI
       ▼
┌──────────────────┐
│   OPENAI API     │
└──────┬───────────┘
       │
       │ 5. Parse JSON Response
       ▼
┌──────────────────┐
│ BUDGET PLANNER   │
│ Display Budget   │
│  Categories      │
└──────────────────┘
```

## Vendor Discovery Flow

```
┌─────────────┐
│    USER     │
└──────┬──────┘
       │
       │ 1. Browse Vendors
       ▼
┌──────────────────┐
│  VENDORS PAGE    │
└──────┬───────────┘
       │
       │ 2. Search/Filter
       │    (category, rating)
       ▼
┌──────────────────┐
│  BACKEND API     │
│  /api/vendors    │
└──────┬───────────┘
       │
       │ 3. Query Database
       ▼
┌──────────────────┐
│    MONGODB       │
│  Vendors Model   │
└──────┬───────────┘
       │
       │ 4. Return Results
       ▼
┌──────────────────┐
│  VENDORS PAGE    │
│  Display Cards   │
└──────────────────┘
```

## Authentication Flow

```
┌─────────────┐
│    USER     │
└──────┬──────┘
       │
       │ 1. Login
       ▼
┌──────────────────┐
│  LOGIN PAGE      │
└──────┬───────────┘
       │
       │ 2. Firebase Auth
       ▼
┌──────────────────┐
│  FIREBASE        │
│  • Email/Pass    │
│  • Google OAuth  │
└──────┬───────────┘
       │
       │ 3. Get User Token
       ▼
┌──────────────────┐
│  AUTH CONTEXT    │
│  Store User      │
└──────┬───────────┘
       │
       │ 4. Save to Backend
       ▼
┌──────────────────┐      ┌──────────────────┐
│  BACKEND API     │─────▶│    MONGODB       │
│ /api/auth/save   │      │  User Model      │
└──────┬───────────┘      └──────────────────┘
       │
       │ 5. Redirect
       ▼
┌──────────────────┐
│   DASHBOARD      │
│  (Protected)     │
└──────────────────┘
```

## Database Schema

```
┌─────────────────────────────────────────┐
│               USERS                     │
├─────────────────────────────────────────┤
│ uid: String (Firebase)                  │
│ email: String                           │
│ displayName: String                     │
│ photoURL: String                        │
│ weddingDetails: {                       │
│   weddingDate: Date                     │
│   partnerName: String                   │
│   venue: String                         │
│   guestCount: Number                    │
│   budget: Number                        │
│   theme: String                         │
│ }                                       │
│ createdAt: Date                         │
│ updatedAt: Date                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│           WEDDING PLANS                 │
├─────────────────────────────────────────┤
│ userId: String (ref)                    │
│ weddingDate: Date                       │
│ theme: Object                           │
│ budget: Object                          │
│ timeline: Array                         │
│ vendors: Array (refs)                   │
│ guestList: Array                        │
│ tasks: Array                            │
│ notes: Array                            │
│ createdAt: Date                         │
│ updatedAt: Date                         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│              VENDORS                    │
├─────────────────────────────────────────┤
│ name: String                            │
│ category: String                        │
│ description: String                     │
│ location: String                        │
│ contact: Object                         │
│ priceRange: Object                      │
│ rating: Number                          │
│ reviews: Array                          │
│ images: Array                           │
│ services: Array                         │
│ availability: Array                     │
│ verified: Boolean                       │
│ featured: Boolean                       │
│ createdAt: Date                         │
│ updatedAt: Date                         │
└─────────────────────────────────────────┘
```

## Technology Stack

```
┌─────────────────────────────────────────────────┐
│                  FRONTEND                       │
├─────────────────────────────────────────────────┤
│  React 18        │  UI Library                  │
│  Vite            │  Build Tool                  │
│  Tailwind CSS    │  Styling                     │
│  React Router    │  Routing                     │
│  Firebase SDK    │  Authentication              │
│  Axios           │  HTTP Client                 │
│  Lucide React    │  Icons                       │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│                  BACKEND                        │
├─────────────────────────────────────────────────┤
│  Node.js         │  Runtime                     │
│  Express.js      │  Web Framework               │
│  MongoDB         │  Database                    │
│  Mongoose        │  ODM                         │
│  OpenAI          │  AI Integration              │
│  Helmet          │  Security                    │
│  CORS            │  Cross-Origin                │
│  Morgan          │  Logging                     │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│              EXTERNAL SERVICES                  │
├─────────────────────────────────────────────────┤
│  Firebase        │  Authentication              │
│  OpenAI          │  AI/GPT                      │
│  MongoDB Atlas   │  Cloud Database              │
│  Vercel          │  Frontend Hosting            │
│  Railway         │  Backend Hosting             │
└─────────────────────────────────────────────────┘
```

## Security Architecture

```
┌─────────────────────────────────────────────────┐
│                SECURITY LAYERS                  │
├─────────────────────────────────────────────────┤
│                                                 │
│  1. AUTHENTICATION                              │
│     └─ Firebase Auth (Email + Google)          │
│                                                 │
│  2. AUTHORIZATION                               │
│     └─ Protected Routes                        │
│     └─ Auth Context                            │
│                                                 │
│  3. API SECURITY                                │
│     └─ Rate Limiting (100/15min)               │
│     └─ CORS Protection                         │
│     └─ Helmet Security Headers                 │
│                                                 │
│  4. DATA SECURITY                               │
│     └─ Environment Variables                   │
│     └─ Input Validation                        │
│     └─ MongoDB Injection Prevention            │
│                                                 │
│  5. ERROR HANDLING                              │
│     └─ Try-Catch Blocks                        │
│     └─ Error Middleware                        │
│     └─ Logging                                 │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Deployment Architecture

```
┌─────────────────────────────────────────────────┐
│                 PRODUCTION                      │
└─────────────────────────────────────────────────┘

    ┌──────────────┐
    │    USERS     │
    └──────┬───────┘
           │
           │ HTTPS
           ▼
    ┌──────────────┐
    │   VERCEL     │  ← Frontend (React)
    │  (Frontend)  │     Port: 443
    └──────┬───────┘
           │
           │ HTTPS API Calls
           ▼
    ┌──────────────┐
    │   RAILWAY    │  ← Backend (Node.js)
    │  (Backend)   │     Port: 443
    └──────┬───┬───┘
           │   │
           │   └─────────────┐
           │                 │
           ▼                 ▼
    ┌──────────┐      ┌──────────┐
    │ MONGODB  │      │ OPENAI   │
    │  ATLAS   │      │   API    │
    └──────────┘      └──────────┘

    ┌──────────────┐
    │  FIREBASE    │
    │    AUTH      │
    └──────────────┘
```
