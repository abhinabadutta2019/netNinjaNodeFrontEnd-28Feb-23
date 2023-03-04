const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();
//get/render all blog
router.get("/", blogController.blog_index);

//post request /for accepting form data
router.post("/", blogController.blog_create_post);

//create
router.get("/create", blogController.blog_create_get);

//
router.get("/:id", blogController.blog_details);

//delete
router.delete("/:id", blogController.blog_delete);

module.exports = router;
