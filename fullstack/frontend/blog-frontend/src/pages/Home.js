
// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { getAllBlogs } from "../services/blogService";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs()
      .then((data) => setBlogs(data.blogs))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        All Blogs
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;