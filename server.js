
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


app.use(cors());  
app.use(express.json());  
app.use('/uploads', express.static('uploads'));  


app.use('/api/auth', require('./routes/auth'));
//app.use('/api/ai', require('./routes/ai'));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log(' MongoDB Connected'))
  .catch(err => console.log('MongoDB Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});