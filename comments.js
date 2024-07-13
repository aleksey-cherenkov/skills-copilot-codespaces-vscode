// Create web server and listen on port 4000
// Send "Hello World" response on GET request to root URL
// Send "Hello World" response on POST request to /comments URL
// Send "Hello World" response on PUT request to /comments URL
// Send "Hello World" response on DELETE request to /comments URL
// Send "Hello World" response on PATCH request to /comments URL

const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/comments', (req, res) => {
  res.send('Hello World');
});

app.put('/comments', (req, res) => {
  res.send('Hello World');
});

app.delete('/comments', (req, res) => {
  res.send('Hello World');
});

app.patch('/comments', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});