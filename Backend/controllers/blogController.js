import Blog from '../models/blogModel.js';

// const mongoose = require("mongoose");
import mongoose from 'mongoose';
import Data from '../models/userModel.js';

const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });

  res.status(200).json(blogs);
};

// get a single workout
const getBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Blog" });
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(404).json({ error: "No such Blog" });
  }

  res.status(200).json(blog);
};

// create a new workout
const createBlog = async (req, res) => {
  const { title, short_description, content, thumbnail, blogtype, like } = req.body;

  let email = "bharadraj@gmail.com";
  const userData = await Data.findOne({email: email});

  
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!short_description) {
    emptyFields.push("short_description");
  }
  if (!content) {
    emptyFields.push("content");
  }
  if (!thumbnail) {
    emptyFields.push("thumbnail");
  }
  if (!blogtype) {
    emptyFields.push("blogtype");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add to the database
  try {
    const blog = await Blog.create({
      title,
      short_description,
      content,
      thumbnail,
      blogtype,
      like,
      userid : userData._id
    });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such Blog" });
  }

  const blog = await Blog.findOneAndDelete({ _id: id });

  if (!blog) {
    return res.status(400).json({ error: "No such Blog" });
  }

  res.status(200).json(blog);
};

// update a workout
const updateBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such Blog" });
  }

  const blog = await Blog.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!blog) {
    return res.status(400).json({ error: "No such Blog" });
  }

  res.status(200).json(blog);
};

// module.exports = {
//   getBlogs,
//   getBlog,
//   createBlog,
//   deleteBlog,
//   updateBlog,
// };

const blogController = {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
}
export default blogController;