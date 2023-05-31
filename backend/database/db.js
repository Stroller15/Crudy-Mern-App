import mongoose from "mongoose";



const connectDB = async (username, password) => {
  const MONGO_URL = `mongodb://${username}:${password}@ac-bmzoirh-shard-00-00.rgnt1jp.mongodb.net:27017,ac-bmzoirh-shard-00-01.rgnt1jp.mongodb.net:27017,ac-bmzoirh-shard-00-02.rgnt1jp.mongodb.net:27017/CRUD-BACKEND?ssl=true&replicaSet=atlas-92adjt-shard-0&authSource=admin&retryWrites=true&w=majority`;
  
  try {
    await mongoose.connect(MONGO_URL);
    console.log("data base connected");
  } catch {
    console.log("Error while connecting with the database", error);
  }
}; 

export default connectDB;