const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Serve index.html file on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join('/', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
