require('dotenv').config();

const express = require('express')
const connectDB = require('./db.js')

const app = express()


connectDB()
    .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  }); app.listen(3000,()=>{
    console.log("app is running");    
 })
  
 
 