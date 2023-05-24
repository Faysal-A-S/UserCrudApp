import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-0dxoc5e-shard-00-00.5unjowv.mongodb.net:27017,ac-0dxoc5e-shard-00-01.5unjowv.mongodb.net:27017,ac-0dxoc5e-shard-00-02.5unjowv.mongodb.net:27017/?ssl=true&replicaSet=atlas-1308hz-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
