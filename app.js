const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/users');
const posts = require('./routes/api/posts');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//DB CONFIG
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose.connect(db,{ useNewUrlParser: true }).then(()=> console.log('MongoDB Connected')).catch(err=>console.log(err));

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

//Use routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

app.listen(process.env.PORT,process.env.IP,()=> console.log('server on port '+process.env.PORT,process.env.IP));