const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// Middleware
app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse JSON bodies

// Dummy data
const users = [
    { id: 1, name: 'Alice', email: 'alice@email.com' },
    { id: 2, name: 'Bob', email: 'bob@email.com' },
    { id: 3, name: 'Charlie', email: 'charlie@email.com' },
  ];

app.get('/users', (req, res) => {
    res.json(users);
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))