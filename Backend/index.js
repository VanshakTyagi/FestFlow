const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

dotenv.config();
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(error => console.error('MongoDB Connection Error:', error));

// const authRoutes = require('./routes/auth');
// const eventRoutes = require('./routes/events');
// const bookingRoutes = require('./routes/bookings');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));