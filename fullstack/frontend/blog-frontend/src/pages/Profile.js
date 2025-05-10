// src/pages/Profile.js
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button, Card, CardContent, CardMedia } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { deleteBlog, getUserBlogs } from "../services/blogService";

const Profile = () => {
    const { user } = useAuth();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        if (user?._id) {
            getUserBlogs(user._id)
                .then((data) => setBlogs(data.blogs))
                .catch((err) => console.error(err));
        }
    }, [user]);

    const handleDelete = (id) => {
        deleteBlog(id, user.token)
            .then(() => setBlogs(blogs.filter((blog) => blog._id !== id)))
            .catch((err) => console.error(err));
    };

    return (
        <Box mt={4}>
            <Typography variant="h4" gutterBottom>
                My Blogs
            </Typography>
            <Grid container spacing={3}>
                {blogs.map((blog) => (
                    <Grid item xs={12} sm={6} md={4} key={blog._id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={blog.imageUrl}
                                alt={blog.title}
                            />
                            <CardContent>
                                <Typography variant="h6">{blog.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {blog.content.substring(0, 100)}...
                                </Typography>
                                <Box mt={2} display="flex" justifyContent="space-between">
                                    <Button variant="contained" color="primary">Edit</Button>
                                    <Button variant="outlined" color="error" onClick={() => handleDelete(blog._id)}>Delete</Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Profile;