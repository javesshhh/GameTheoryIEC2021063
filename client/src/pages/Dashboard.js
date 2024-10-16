import React, { useEffect, useState } from "react";
import BookingTable from "../components/BookingTable";
import axios from "axios";

const BookingDashboard = () => {
  const [bookings, setBookings] = useState([]); // Store bookings for all sports
  const [sports] = useState(["Tennis", "Badminton", "Squash"]); // List of sports
  const [courts] = useState(["Court 1", "Court 2", "Court 3", "Court 4"]);
  const [times] = useState([
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
  ]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/bookings");
        console.log("Fetched Bookings:", response.data);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error.message || error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-6">
      <div className="container p-6">
        <div className="flex justify-center items-center mb-4">
          <h1 className="text-2xl font-bold">Booking Dashboard</h1>
        </div>
      </div>

      {sports.map((sport) => (
        <div key={sport} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{sport} Bookings</h2>
          {/* {bookings.length > 0 ? ( */}
          <BookingTable
            bookings={bookings}
            courts={courts}
            times={times}
            selectedSport={sport} // Pass the current sport to BookingTable
          />
          {/* ) : (
            <p>No bookings available for {sport}.</p>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default BookingDashboard;
