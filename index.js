const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // This will serve files from the 'public' directory

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Ensure there is an index.html file in the 'public' folder
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

