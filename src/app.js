const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET API — returns a greeting
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello, Abhijit! Welcome to your Express server.' });
});

// POST API — receives user data
app.post('/api/user', (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Received user: ${name}, age ${age}` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});