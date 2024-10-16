const Booking = require('../models/Booking');

// Get all bookings based on centerId, sportId, and date
exports.getBookings = async (req, res) => {
  const { centerId, sportId, date } = req.query; // Get parameters from query
  try {
    // Find bookings that match the center, sport, and date
    const bookings = await Booking.find({
      center: centerId,
      sport: sportId,
      date: date,
    });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new booking
exports.createBooking = async (req, res) => {
  const { centerId, sportId, resourceId, date, timeSlot, customerName } = req.body;
  try {
    // Check if the time slot is already booked
    const existingBooking = await Booking.findOne({ resource: resourceId, date, timeSlot });
    if (existingBooking) return res.status(400).json({ message: 'Slot already booked' });

    // Create a new booking instance
    const booking = new Booking({
      center: centerId,
      sport: sportId,
      resource: resourceId, // Assuming this is the court ID or similar
      date,
      timeSlot,
      customerName,
    });

    // Save the booking to the database
    await booking.save();
    res.status(201).json(booking); // Return the created booking
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a booking by ID
exports.deleteBooking = async (req, res) => {
  const { id } = req.params; // Get booking ID from request parameters
  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    await booking.remove(); // Delete the booking
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
