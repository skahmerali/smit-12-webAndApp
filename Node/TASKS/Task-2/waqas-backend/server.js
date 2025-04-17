let express = require('express');
let app = express();
let dbConnect = require('./config/db');
let cors = require('cors');



app.use(express.json());
app.use(cors())
dbConnect();
 

app.listen(3000, ()=> console.log('serverin  is running'))