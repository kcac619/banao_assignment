import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [commentSchema],
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
