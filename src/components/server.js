// server.js
const express = require('express');
const app = express();
app.use(express.json());

let users = []; // Menyimpan data di memori (tidak persisten)

app.post('/register', (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  users.push({ username, password });
  res.json({ message: 'Registration successful' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  res.json({ message: 'Login successful' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
