const  mongoose = require("mongoose")

const connectDB = async () => {
try{
    const conn = await mongoose.connect(process.env.MONGODB_URI); 
          console.log(`MongoDB Connected: ${conn.connection.host}`)
        ;} catch (error){
console.error(error);
process.exit(1);
}

 
};

module.exports = connectDB;
//const mongoose = require("mongoose");

//const connectDB = async () => {
  //try {
    
    //console.log('Attempting to connect with URI:', process.env.MONGODB_URI);
    
    //if (!process.env.MONGODB_URI) {
      //throw new Error('MONGODB_URI environment variable is not defined');
    //}
    
   // const conn = await mongoose.connect(process.env.MONGODB_URI);
    //console.log(`MongoDB Connected: ${conn.connection.host}`);
  //} catch (error) {
    //console.error(error);
   // process.exit(1);
  //}
//};

//module.exports = connectDB;
