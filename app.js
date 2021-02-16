const users = require('./routes/users');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const admin = require('./routes/admin');

mongoose.connect('mongodb://localhost/my_rest_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
}).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...',err));
 
app.use(express.json());
 
app.use('/api/user', users);
app.use('/api/auth', auth);
app.use('/api/user/admin', admin);

const port = 3000;
http.listen(port, () => console.log(`Listening on port ${port}...`));