import React from "react";
import { posts } from "@/mocks/blog";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Post = ({ params }: { params: { post: string } }) => {
  const currentPost: any = posts.find((post) => post.id.toString() === params?.post);
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-h2Size font-acorn tracking-[-3px] sm:tracking-[-2px] font-[600] self-center justify-center">
        {currentPost?.name}
      </h1>
      <div className="text-footerGreen">
        <span className="font-[500]">Written By Ulkar Tahmazova</span>
        <span className="mx-2 text-[#968d8e]">•</span>
        <span>{currentPost?.date}</span>
      </div>
      <div className="flex flex-row gap-3 socialbtns">
        <ul>
          <li>
            <a href="https://www.instagram.com">
              <FaInstagram className="fa" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <FaTwitter className="fa" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <FaFacebook className="fa" />
            </a>
          </li>
        </ul>
      </div>
      <Image alt="blog_image" width={0} height={0} className="w-[80%] h-auto" src={currentPost?.path} unoptimized />

      <div className="blog-content">
        <p
          dangerouslySetInnerHTML={{ __html: currentPost?.content }}
          className="text-footerGreen leading-8 text-fontBody whitespace-break-spaces"
        ></p>
      </div>
    </div>
  );
};

export default Post;
