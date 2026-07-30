# FestFlow
A modern full-stack event management and booking platform built with the MERN stack. FestFlow enables organizers to create and manage events while providing users with a seamless experience for discovering, booking, and tracking their registrations—all from a single application.

## ✨ Highlights

- 🔐 Secure authentication using JWT
- 📧 Email OTP verification for account activation and booking confirmation
- 👥 Role-based access for Users and Admins
- 🎫 Event booking system with real-time seat availability
- 📊 Admin dashboard with booking insights and revenue statistics
- 📩 Automated email notifications
- 📱 Fully responsive interface built with React and Tailwind CSS

---

## 🚀 Features

### Authentication & Security

- User registration and login
- Password encryption using bcrypt
- JWT-based authentication
- Email OTP verification for account activation
- OTP verification before confirming event bookings
- Protected API routes and role-based authorization

---

### Event Management

- Create, edit, and delete events
- Add event banners using image URLs
- Configure:
  - Event title
  - Description
  - Category
  - Venue
  - Date & Time
  - Ticket price
  - Maximum capacity
- Support for both free and paid events

---

### Booking System

- Browse available events
- Book tickets securely using OTP verification
- Automatic seat availability validation
- Pending booking workflow for admin approval
- Cancel bookings before confirmation
- View booking history from user dashboard

---

### Admin Dashboard

The admin panel provides complete control over the platform.

Features include:

- Manage all events
- Review booking requests
- Accept or reject registrations
- Mark bookings as Paid or Unpaid
- Track:
  - Total Events
  - Total Users
  - Pending Requests
  - Confirmed Bookings
  - Revenue Generated

---

### Email Notifications

Automatic emails are sent for important actions including:

- Account verification
- Booking verification OTP
- Booking confirmation
- Booking rejection (optional)

---

## 🛠 Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt
- Nodemailer

### Development Tools

- Git & GitHub
- Postman
- Nodemon
- dotenv

---
