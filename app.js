const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/users');
const posts = require('./routes/api/posts');

const app = express();

//DB CONFIG
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db,{ useNewUrlParser: true }).then(()=> console.log('MongoDB Connected')).catch(err=>console.log(err));

app.get('/',(req,res)=> res.send('Hello gf'));

//Use routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

app.listen(process.env.PORT,process.env.IP,()=> console.log('server on port '+process.env.PORT,process.env.IP));