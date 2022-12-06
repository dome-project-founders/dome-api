require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
 
const PORT = process.env.PORT || 3001 ;
const landRoutes = require('./routes/land');
 
// database connection
require('./config/database.js');
 
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
 
// routes
app.use('/api/land', landRoutes);
 
// server running status
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The app listening at http://localhost: ${PORT}`)
});