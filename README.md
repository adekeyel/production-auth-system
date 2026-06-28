# Production Authentication System

## Features
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Profile Image Upload with Cloudinary
- MongoDB Integration

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- Cloudinary

## Installation

npm install

## Environment Variables

Create a .env file:

PORT=5000
MONGO_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

## Run

npm run dev

## API Endpoints

POST /api/auth/register
POST /api/auth/login
GET /api/users/profile
POST /api/upload/profile-image