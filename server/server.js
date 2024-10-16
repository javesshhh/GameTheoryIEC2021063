require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookingRoutes = require('./routes/bookings');
// const morgan = require('morgan'); // Add morgan for logging

const app = express();

// Middleware
app.use(cors()); // Adjust this if needed for security
app.use(bodyParser.json());
// app.use(morgan('dev')); // Logging middleware

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/bookings', bookingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack trace
  res.status(500).json({ message: 'Something went wrong!' }); // Generic error response
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed due to app termination');
    process.exit(0);
  });
});


//  oLQEwWIcDKWwLtx1
//  javeshlodha02
//  mongodb+srv://javeshlodha02:oLQEwWIcDKWwLtx1@cluster0.1u9wh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0