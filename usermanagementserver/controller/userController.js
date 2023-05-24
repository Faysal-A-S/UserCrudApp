import User from "../schema/user-schema.js";
import { v4 as uuid } from "uuid";
export const addUser = async (request, response) => {
  const newUser = new User({
    _id: uuid(),
    name: request.body.name,
    email: request.body.email,
    userName: request.body.userName,
    phone: request.body.phone,
  });
  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (err) {
    response.status(409).json({ message: err.message });
  }
};
export const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (err) {
    response.status(404).json({ message: err.message });
  }
};
export const editUser = async (request, response) => {
  let user = request.body;
  const editedUser = new User(user);

  try {
    await User.updateOne({ _id: request.params.id }, editedUser);
    response.status(200).json(editUser);
  } catch (err) {
    response.status(409).json({ message: err.message });
  }
};

export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    response.status(409).json({ message: err.message });
  }
};
