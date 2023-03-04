const Blog = require("../models/blog");

const blog_index = async (req, res) => {
  try {
    const myAwait = await Blog.find().sort({ createdAt: -1 });
    res.render("index", { title: "All Blogs", blogs: myAwait });
  } catch (e) {
    console.log(e);
  }
};

const blog_create_post = async (req, res) => {
  const blog = new Blog(req.body);
  //
  try {
    const myAwait = await blog.save();
    res.redirect("/blogs");
  } catch (e) {
    console.log(e);
  }
};

const blog_create_get = (req, res) => {
  res.render("create", { title: "create a new blogs" });
};

const blog_details = async (req, res) => {
  const id = req.params.id;

  try {
    const myAwait = await Blog.findById(id);
    res.render("details", { blog: myAwait, title: "Blog details" });
  } catch (e) {
    res.status(404).render("404", { title: "Blog not found" });
  }
};

const blog_delete = async (req, res) => {
  const id = req.params.id;
  try {
    const myAwait = await Blog.findByIdAndDelete(id);
    res.json({ redirectToUrl: "/blogs" });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
