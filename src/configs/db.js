const mongoose = require("mongoose");
let Sharath_db = "mongodb+srv://sarath:sarath194@cluster1.wrjri.mongodb.net/vedix";
module.exports = () => {
  return mongoose.connect(
  Sharath_db
  );
   
};
