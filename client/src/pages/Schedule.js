import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Schedule.css"; // Import the CSS file

const Schedule = () => {
  const [bookings, setBookings] = useState([]);
  const [sports] = useState(["Tennis", "Badminton", "Squash"]); // List of sports
  const [selectedSport, setSelectedSport] = useState(sports[0]); // Default selected sport
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
        const response = await axios.get("http://localhost:5000/api/bookings", {
          params: { sport: selectedSport },
        });
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [selectedSport]);

  const handleBooking = async (timeSlot, court) => {
    const customerName = prompt("Enter your name to book the court:");
    if (customerName) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/bookings",
          { timeSlot, court, customerName, sport: selectedSport }
        );
        const bookingId = response.data._id;

        const updatedBookings = await axios.get(
          "http://localhost:5000/api/bookings",
          { params: { sport: selectedSport } }
        );
        setBookings(updatedBookings.data);

        setTimeout(async () => {
          try {
            await axios.delete(
              `http://localhost:5000/api/bookings/${bookingId}`
            );
            const refreshedBookings = await axios.get(
              "http://localhost:5000/api/bookings",
              { params: { sport: selectedSport } }
            );
            setBookings(refreshedBookings.data);
          } catch (error) {
            console.error("Error deleting booking:", error);
          }
        }, 60 * 60 * 1000);
      } catch (error) {
        console.error("Error booking the court:", error);
      }
    }
  };

  return (
    <div className="schedule-container">
      <h1 className="schedule-title">Book a Court</h1>
      <select
        value={selectedSport}
        onChange={(e) => setSelectedSport(e.target.value)}
        className="schedule-select"
      >
        {sports.map((sport) => (
          <option key={sport} value={sport}>
            {sport}
          </option>
        ))}
      </select>
      <div className="table-wrapper">
        <table className="schedule-table">
          <thead>
            <tr>
              <th className="table-header"></th>
              {courts.map((court, index) => (
                <th key={index} className="table-header">
                  {court}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {times.map((time, index) => (
              <tr key={index} className="table-row">
                <td className="time-cell">{time}</td>
                {courts.map((court, courtIndex) => {
                  const booking = bookings.find(
                    (b) => b.timeSlot === time && b.court === court
                  );
                  return (
                    <td key={courtIndex} className="booking-cell">
                      {booking ? (
                        <span className="booked">{booking.customerName}</span>
                      ) : (
                        <button
                          onClick={() => handleBooking(time, court)}
                          className="book-button"
                        >
                          Book
                        </button>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
