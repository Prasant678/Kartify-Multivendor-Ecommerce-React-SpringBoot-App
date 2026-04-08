# Kartify – Multivendor E-Commerce Platform

Kartify is a full-stack multivendor e-commerce platform designed to support multiple sellers and customers within a single marketplace. The application enables sellers to manage their products, while customers can browse items, add them to a cart, and place orders securely through an integrated payment gateway.

The platform is built using modern full-stack technologies with a React-based frontend and a Spring Boot backend. It follows a scalable architecture with RESTful APIs, secure JWT authentication, and role-based access control to manage different user roles including administrators, sellers, and customers.

## 🛠Tech Stack

### Frontend
- React.js (Vite)
- TypeScript
- Tailwind CSS
- Material UI
- Redux Toolkit
- Axios

### Backend
- Spring Boot
- Spring Security
- Hibernate
- REST APIs
- JWT Authentication
- Spring Mail

### Database
- MySQL

### Payment Integration
- Razorpay

## 🚀Features

- Multivendor marketplace with User, Seller, and Admin roles
- Secure authentication using JWT and OTP verification
- Seller dashboard for managing products and orders
- Admin panel for platform management
- Product listing, filtering, and category management
- Shopping cart and wishlist functionality
- Coupon and discount system
- Real-time order tracking
- Secure online payments using Razorpay
- Responsive design for desktop, tablet, and mobile devices
- Centralized state management with Redux Toolkit

## 🔥Key Contributions

Built a responsive frontend using React.js, TypeScript, Tailwind CSS, and Material UI
Developed RESTful APIs using Spring Boot, Spring Security, and Hibernate
Implemented JWT authentication, OTP verification, and email services using Spring Mail
Integrated Razorpay payment gateway for secure online payments
Designed product, cart, wishlist, order, and seller management modules
Used Redux Toolkit and Axios for scalable state management and API communication

## 📁Project Structure

- frontend/ → React.js frontend application
- backend/ → Spring Boot backend APIs
- backend/src/main/java → Controllers, services, repositories, and entities
- backend/src/main/resources → Application configuration and properties

## 📦Installation

### Clone the repository

- git clone <repo-url>
- cd Kartify

### Frontend Setup

- cd frontend
- npm install
- npm run dev

### Backend Setup

- cd backend
- mvn spring-boot:run

## 🔐Environment Variables

### Create an application.properties or .env file in the backend and add the following:
- SPRING_DATASOURCE_URL=your_mysql_database_url
- SPRING_DATASOURCE_USERNAME=your_mysql_username
- SPRING_DATASOURCE_PASSWORD=your_mysql_password
- JWT_SECRET=your_secret_key
- RAZORPAY_KEY_ID=your_razorpay_key_id
- RAZORPAY_KEY_SECRET=your_razorpay_secret
- MAIL_USERNAME=your_email
- MAIL_PASSWORD=your_email_password

#### The following files should not be pushed to GitHub:

- .env
- application.properties
- .env.local

### Add these lines to your .gitignore:

- .env
- .env.*
- application.properties

## 🌐Deployment

### The project can be deployed using:
- Frontend → Vercel or Netlify
- Backend → Render, Railway, or AWS

Whenever changes are pushed to the main branch, the deployed version can be updated automatically through GitHub integration.

## 💼Author

G Prasant
Full-Stack Developer