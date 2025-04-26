const express = require('express');
const app = express();
const router = require('./Router.js');


app.use(express.json());
app.use('/api', router); // Use the router.js

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));