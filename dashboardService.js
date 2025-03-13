const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const cors = require('cors'); // Import CORS
app.use(cors()); // Enable CORS for all routes

// Route for Dashboard
app.get('/dashboard', (req, res) => {
  // Extract token from Authorization header
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send('Token is required');
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'secretKey');
    res.send(`Welcome to the dashboard, ${decoded.username}!`);
  } catch (err) {
    // Handle invalid token
    res.status(401).send('Invalid token');
  }
});

// Start the server
app.listen(4000, () => {
  console.log('Dashboard service running on port 4000');
});

app.get('/dashboard', (req, res) => {
    res.send('This is the dashboard route. Use GET to view the dashboard.');
});