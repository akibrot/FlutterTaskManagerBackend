import mongoose from "mongoose";

const Userschema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  Task: { type: Array },
});

const UserModel = mongoose.model("MainUser", Userschema);
export default UserModel;
