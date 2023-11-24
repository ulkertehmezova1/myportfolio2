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
        <span className="font-[500]">Written By Narin Tahmazova</span>
        <span className="mx-2 text-[#968d8e]">•</span>
        <span>{currentPost?.date}</span>
      </div>
      <div className="flex flex-row gap-3 socialbtns">
        <ul>
          <li>
            <FaInstagram className="fa" />
          </li>
          <li>
            <FaTwitter className="fa" />
          </li>
          <li>
            <FaFacebook className="fa" />
          </li>
        </ul>
      </div>
      <Image alt="blog_image" width={0} height={0} className="w-full h-auto" src={currentPost?.path} />
      <p className="text-footerGreen leading-8 text-fontBody">{currentPost?.content}</p>
    </div>
  );
};

export default Post;
