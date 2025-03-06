const express = require('express');
const app = express();
const router = require('./routes/router');

app.use(express.json());
app.use('/', router); // Use the router.js

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
