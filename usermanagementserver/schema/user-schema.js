import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: String,
  name: String,
  userName: String,
  email: String,
  phone: Number,
});

const User = mongoose.model("user", userSchema);

export default User;
