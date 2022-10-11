const mongoose = require("mongoose");
const url = 'mongodb://localhost/user'



const { MONGO_URI } = process.env;
// const con = mongoose.connection

exports.connect = () => {
  // Connecting to the database
  mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
 
   
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};