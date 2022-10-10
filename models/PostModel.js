import mongoose from "mongoose";

const postschema = mongoose.Schema({
  discription: { type: String },
  pic: { type: Object },
});

const PostModel = mongoose.model("post", postschema);
export default PostModel;
