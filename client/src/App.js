// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import BookingDashboard from './pages/Dashboard'; // Rename if necessary
// import Schedule from './pages/Schedule';
// import './styles.css';

// function App() {
//   const [refresh, setRefresh] = useState(false);

//   const handleBookingChange = () => {
//     setRefresh((prev) => !prev); // Toggle refresh state
//   };

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="flex-grow bg-white shadow-md rounded-lg p-4">
//         <Routes>
//           <Route path="/dashboard" element={<BookingDashboard />} />
//           <Route path="/schedule" element={<Schedule onBookingChange={handleBookingChange} />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BookingDashboard from './pages/Dashboard'; // Make sure the import is correct
import Schedule from './pages/Schedule';
import './styles.css';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleBookingChange = () => {
    setRefresh((prev) => !prev); // Toggle refresh state
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-white shadow-md rounded-lg p-4">
        <Routes>
          <Route path="/dashboard" element={<BookingDashboard />} />
          <Route path="/schedule" element={<Schedule onBookingChange={handleBookingChange} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
