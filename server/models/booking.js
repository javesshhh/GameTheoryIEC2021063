// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  timeSlot: { type: String, required: true },
  court: { type: String, required: true },
  customerName: { type: String, required: true },
  sport: { type: String, required: true }, // New field for sport
  createdAt: {
    type: Date,
    default: Date.now, // Sets the default time to the current date/time
    expires: '1m', // Automatically delete after 1 minute
  },
});

// Export the Booking model
module.exports = mongoose.model('Booking', bookingSchema);
