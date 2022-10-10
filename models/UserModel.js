import mongoose from "mongoose";

const userschema = mongoose.Schema({
  username: String,
  passwoard: String,
  profilepic: Object,
  posts: [],
});

const UserModel = mongoose.model("user", userschema);
export default UserModel;
