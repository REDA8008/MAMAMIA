//require('dotenv').config();
//const express = require('express')
//const connectDB = require('./db.js')

//const app = express()


//connectDB()
  //.then(() => {
    //console.log('Database connected successfully');
  //})
  //.catch((error) => {
    //console.error('Database connection failed:', error);
    //process.exit(1);
  //}); app.listen(3000,()=>{
    //console.log("app is running");    
 //})
  require('dotenv').config();

const express = require('express');
const connectDB = require('./db.js');

// Debug: Check if environment variables are loaded
// Verify required environment variables are loaded
if (!process.env.MONGODB_URI) {
  console.error('Missing required environment variable: MONGODB_URI');
  process.exit(1);
}
const app = express();

connectDB()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  });

app.listen(3000, () => {
  console.log("app is running");
});
