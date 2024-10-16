
# Sports Booking App

## College ID: IEC2021063

## Setup, Run, and Deploy Instructions for Sports Booking App

### 1. Setting Up the Project

#### Prerequisites
Before you begin, make sure you have the following installed on your machine:
- **Node.js** (version 14 or later) - [Download Node.js](https://nodejs.org/)
- **MongoDB** - [Download MongoDB](https://www.mongodb.com/try/download/community) (for local development)
- **Git** - [Download Git](https://git-scm.com/)

#### Cloning the Repository
Open your terminal or command prompt and run the following commands:
git clone https://github.com/javesshhh/sports-booking-app.git
cd sports-booking-app

#### Installing Dependencies
##### For the Server
1. Navigate to the server directory:
   cd server
   
2. Install the required dependencies:
   npm install
   

##### For the Client
1. Navigate back to the root directory:
   cd ..
   
2. Navigate to the client directory:
   cd client
   
3. Install the required dependencies:
   npm install
   

#### Setting Up Environment Variables
1. In the `server` directory, create a `.env` file:
   touch .env
   
2. Add the following lines to the `.env` file, replacing `your_mongodb_uri` with your actual MongoDB connection string:
   ```env
   MONGO_URI="your_mongodb_uri"
   PORT=5000
   ```

### 2. Running the Application

#### Starting the Server
1. In the server directory:
   ```bash
   cd server
   ```
2. Start the server:
   ```bash
   node server.js
   ```

#### Starting the Client
1. Open a new terminal window and navigate to the client directory:
   ```bash
   cd sports-booking-app/client
   ```
2. Start the client:
   ```bash
   npm start
   ```

The application will be available at:
- **Client:** [http://localhost:3000](http://localhost:3000)
- **Server:** [http://localhost:5000](http://localhost:5000)

### 3. Deploying the Project

#### Deploying the Backend
1. **Push your code** to a GitHub repository.
2. **Create a new service** on [Render](https://render.com/).
3. **Link your GitHub repository** and select the branch you want to deploy.
4. **Configure environment variables** in the Render dashboard by adding `MONGO_URI` and `PORT`.

#### Deploying the Frontend
1. **Push your client code** to a separate GitHub repository.
2. **Create a new static site** on Render.
3. **Link your GitHub repository** for the frontend.

### Final Steps
- Wait for the deployment process to finish.
- Your deployed applications will provide URLs for accessing the frontend and backend.
=======
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
>>>>>>> f1e1e999b9e970b0f6be05eb8f43f860dfb3ab3e
