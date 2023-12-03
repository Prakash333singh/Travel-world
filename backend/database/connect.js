// import mongoose from "mongoose";
// async function connect(){
//     mongoose.set('strictQuery',true);
//     const db=await mongoose.connect(process.env.REACT_APP_DATABASE_URL);
//     console.log("Database Connected to the Atlas Database");
//     return db;
// }
// export default connect;
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//const port = process.env.PORT || 8000;

//database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo database connected");
  } catch (err) {
    console.log("mongo database failed");
  }
};

export default connect;
