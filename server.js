require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
 
const PORT = process.env.PORT || 3001 ;
const landRoutes = require('./routes/land');
const userRoutes = require('./routes/user');
const charRoutes = require('./routes/char');
const lootRoutes = require('./routes/loot');
 
// database connection
require('./config/database.js');
 
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
// routes
app.use('/api/land', landRoutes);
app.use('/api/user', userRoutes);
app.use('/api/char', charRoutes);
app.use('/api/loot', lootRoutes);
 
// server running status
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The app listening at http://localhost: ${PORT}`)
});