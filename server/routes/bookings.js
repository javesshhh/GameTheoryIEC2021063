// routes/bookings.js
const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// Get all bookings (can be filtered by sport)
router.get('/', async (req, res) => {
  const { sport } = req.query; // Get sport from query params
  try {
    const bookings = sport
      ? await Booking.find({ sport }) // Filter by sport if provided
      : await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new booking
router.post('/', async (req, res) => {
  const { timeSlot, court, customerName, sport } = req.body;
  const booking = new Booking({ timeSlot, court, customerName, sport });
  try {
    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a booking
router.delete('/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
