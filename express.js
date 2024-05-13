const express = require('express');
const app = express();
const PORT = 3000;

// Route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello, world! This is your server responding to GET requests.');
});

// Route to handle POST requests
app.post('/', (req, res) => {
  res.send('This is your server responding to POST requests.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
