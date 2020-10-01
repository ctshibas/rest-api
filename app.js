const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')

// load config
dotenv.config({ path: './config/config.env' })

// make express instance for app
const app = express();

// for parsing json objects
// Body parser + cors
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware - function that executes when routes are being hit


// Logging
if (process.env.NODE_ENV === "development") {
	app.use(morgan('start'))	
}

// import the router: post we made
const postsRoute = require('./routes/posts')

// using post routes
app.use('/posts', postsRoute);
// app.use('/user', userRoute);

// ability to create routes
// routes
app.get('/',  (req, res) => {
	res.send('we are home');
})

// connect to db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
	console.log('connected to DB!')
});

// set the port variable from the env file config'd
const PORT = process.env.PORT || 3000;

// how to start listening to server, listening on default: localhost:XXXX
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
