# GameTheoryIEC2021063

1. Introduction 
This project is a web-based sports booking application that allows users to book courts for 
various sports such as Tennis, Badminton, and Squash. It provides a user-friendly interface for 
booking and managing court reservations, aimed at simplifying sports facility management. 
2. Design Decisions 
 MERN Stack: The app uses the MERN (MongoDB, Express.js, React.js, Node.js) stack 
due to its suitability for creating dynamic, real-time applications. 
 State Management: React's useState and useEffect hooks are used for efficient state 
management and asynchronous data fetching. 
 Responsive UI: The layout was designed to be responsive, using Tailwind CSS, to 
ensure compatibility across different screen sizes. 
3. Implementation Details 
 Backend: Implemented with Express.js and connected to a MongoDB database for 
storing booking information. RESTful APIs handle booking data retrieval, creation, and 
deletion. 
 Frontend: Built with React.js, with a focus on reusability and modular components, like 
BookingTable for displaying court availability. 
 Database: MongoDB was chosen for its flexibility and ease of scalability, storing 
bookings with details such as sport, court, and time slot. 
 Styling: Tailwind CSS was used to quickly create a clean and visually appealing 
interface, with CSS classes for responsiveness and interactivity. 
4. Challenges and Solutions 
 Real-time Data Sync: Ensuring that booking data stays up-to-date across different 
components. 
o Solution: Used the useEffect hook with dependencies to trigger data fetching 
upon state changes, ensuring updated data display. 
 Automatic Booking Removal: Implemented a feature to delete bookings after 60 
minutes. 
o Solution: Utilized setTimeout with an API call to remove bookings after the set 
duration. 
 Data Fetching and State Management: Handling asynchronous data fetching with 
React hooks. 
o Solution: Used async/await in combination with React’s useEffect to manage 
data loading efficiently. 
5. Future Improvements 
 User Authentication: Adding a login system to restrict access and personalize booking 
options. 
 Email Notifications: Automated email reminders for users with upcoming bookings. 
 Advanced Filtering: Implementing filtering options for bookings based on sport, court, 
or time. 
 Payment Integration: Adding a payment gateway for managing paid bookings. 
 Analytics Dashboard: A feature for administrators to track usage statistics and popular 
booking times.
