import React from "react";
import "./BookingTable.css"; // Import the CSS file

const BookingTable = ({ bookings, courts, times, selectedSport }) => {
  return (
    <div className="booking-table-wrapper">
      <table className="booking-table">
        <thead>
          <tr>
            <th className="table-header">Time</th>
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
                  (b) =>
                    b.timeSlot === time &&
                    b.court === court &&
                    b.sport === selectedSport
                );

                return (
                  <td key={courtIndex} className="booking-cell">
                    {booking ? (
                      <span className="booked">{booking.customerName}</span>
                    ) : (
                      <span className="available">Available</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;
