const express = require('express');
const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.send('Hello from the Rentera Backend!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
