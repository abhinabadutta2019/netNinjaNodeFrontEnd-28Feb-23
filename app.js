const express = require("express");

const morgan = require("morgan");
//
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogRoutes");

const dbURI = "mongodb://127.0.0.1:27017/blog-net-ninja";

mongoose.connect(dbURI);
//
const app = express();

//register view engine
app.set("view engine", "ejs");

app.listen(3000);

//middleware and static files
app.use(express.static("public"));
//for accepting form data/post request
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

//redirect
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

//blogroutes
app.use("/blogs", blogRoutes);

//
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

// app.get("/", (req, res) => {
//   const blogs = [
//     {
//       title: "Yoshi finds eggs",
//       snippet: "Lorem ipsum dolor sit amet consectetur",
//     },
//     {
//       title: "Mario finds stars",
//       snippet: "Lorem ipsum dolor sit amet consectetur",
//     },
//     {
//       title: "How to defeat bowser",
//       snippet: "Lorem ipsum dolor sit amet consectetur",
//     },
//   ];
//   res.render("index", { title: "Home", blogs: blogs });
// });

//mongoose sandbox

// app.get("/add-blog", async (req, res) => {
//   const blog = new Blog({
//     title: "new blog 2",
//     snippet: "Lorem ipsum dolor sit amet consectetur",
//     body: "Lorem ipsum dolor sit amet consectetur",
//   });

//   try {
//     const myawait = await blog.save();
//     res.send(myawait);
//   } catch (e) {
//     console.log(e);
//   }
// });

// //get all blog
// app.get("/all-blogs", async (req, res) => {
//   try {
//     const myAwait = await Blog.find({});
//     res.send(myAwait);
//   } catch (e) {
//     console.log(e);
//   }
// });

// //get single blog
// app.get("/single-blog", async (req, res) => {
//   try {
//     const myAwait = await Blog.findById("6400d03c7ff4623cde1c13a3");
//     res.send(myAwait);
//   } catch (e) {
//     console.log(e);
//   }
// });
