require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
 
const PORT = process.env.PORT || 3001 ;
const landRoutes = require('./routes/land');
const userRoutes = require('./routes/user');
const charRoutes = require('./routes/char');
const itemRoutes = require('./routes/item');
const actionRoutes = require('./routes/action');
const inventoryRoutes = require('./routes/inventory');
 
// database connection
require('./config/database.js');
 
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
// routes
app.use('/api/land', landRoutes);
app.use('/api/user', userRoutes);
app.use('/api/char', charRoutes);
app.use('/api/item', itemRoutes);
app.use('/api/action', actionRoutes);
app.use('/api/inventory', inventoryRoutes);
 
// server running status
module.exports = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The app listening at http://localhost: ${PORT}`)
});