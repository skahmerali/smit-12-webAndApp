const Blog = require("../models/Blog");
const cloudinary = require("../utils/cloudinary");

exports.createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const file = req.file;

        const uploaded = await cloudinary.uploader.upload(file.path);

        const blog = await Blog.create({
            title,
            content,
            imageUrl: uploaded.secure_url,
            author: req.user
        });

        res.status(201).json(blog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'firstName lastName');
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// ✅ READ user-specific blogs
exports.getUserBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ author: req.user }).sort({ createdAt: -1 });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ✅ UPDATE blog
exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog || blog.author.toString() !== req.user)
            return res.status(401).json({ msg: "Unauthorized or Blog not found" });

        blog.title = req.body.title || blog.title;
        blog.content = req.body.content || blog.content;

        // Optional image update
        if (req.file) {
            const uploaded = await cloudinary.uploader.upload(req.file.path);
            blog.imageUrl = uploaded.secure_url;
        }

        await blog.save();
        res.json(blog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ✅ DELETE blog
exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog || blog.author.toString() !== req.user)
            return res.status(401).json({ msg: "Unauthorized or Blog not found" });

        await blog.remove();
        res.json({ msg: "Blog deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};