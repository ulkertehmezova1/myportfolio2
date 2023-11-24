import React from "react";
import BlogsCard from "@/components/shared/cards/blogs-card";
import { posts } from "@/mocks/blog";
import { Grid } from "@mui/material";
const Blog = () => {
  return (
    <div className="flex flex-col mt-20 items-center justify-center">
      <h1 className="text-h1Size font-acorn tracking-[-3px] sm:tracking-[-2px] font-[600] self-center justify-center">
        Posts
      </h1>
      <Grid container spacing={5} className="">
        {posts?.map((p: any, index: any) => (
          <Grid key={index} item xs={12} md={4} sm={6}>
            <BlogsCard key={p.id} blogPost={p} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;
