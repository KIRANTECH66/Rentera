const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const userRoutes = require('./routes/user.routes');

app.get('/api', (req, res) => {
  res.send('Hello from the Rentera Backend!');
});

// Use routes
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
