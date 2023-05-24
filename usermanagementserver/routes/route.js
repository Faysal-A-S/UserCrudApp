import express from "express";
import {
  addUser,
  getUsers,
  editUser,
  deleteUser,
} from "../controller/userController.js";
const router = express.Router();

router.post("/add", addUser);
router.get("/users", getUsers);
router.post("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;
