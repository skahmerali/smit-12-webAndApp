const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
    createBlog,
    getAllBlogs,
    getUserBlogs,
    updateBlog,
    deleteBlog
} = require("../Controller/blogController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/create", authMiddleware, upload.single("image"), createBlog);
router.get("/all", getAllBlogs); // open API
router.get("/my-blogs", authMiddleware, getUserBlogs); // Logged-in user
router.put("/edit/:id", authMiddleware, upload.single("image"), updateBlog);
router.delete("/delete/:id", authMiddleware, deleteBlog);
module.exports = router;
