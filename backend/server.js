const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const config = require('config');
const https = require('https');
const fs = require('fs');

const app = express();

// HANDLE CORS
app.use(express.json({ extended: false }));
app.options('*', cors());
app.use(cors());

// HANDLE HSTS
app.use(require('helmet')());

// ALLOW STATIC CONTENT
app.use(express.static('static'));

// ROUTES
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

connectDB();

const port = process.env.NODE_ENV === 'production' ? 80 : 7000;
app.listen(port, () => console.log(`Server running on port ${port}.`));