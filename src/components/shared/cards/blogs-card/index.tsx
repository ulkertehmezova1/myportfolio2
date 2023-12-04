import React, { FC } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import sekil from "../../../../../public/images/data-2311261_1280.webp";

interface IBlogsCard {
  blogPost: any;
}

const BlogsCard: FC<IBlogsCard> = ({ blogPost }) => {
  return (
    <div className="">
      <Image
        alt="blog_image"
        src={blogPost?.path}
        width={0}
        unoptimized
        height={0}
        style={{ width: "100%", height: "auto", maxWidth: "420px" }}
        className="rounded-lg"
      />
      <div className="flex mt-5">
        <p className="whitespace-nowrap">{blogPost?.date}</p>
        <div className="w-[300px] h-0 border border-solid border-[#c4c4c4] m-3 inline-block"></div>
      </div>
      <h3 className="text-[1.2rem] font-bold">{blogPost?.name}</h3>
      <p className=" my-3 ">{blogPost?.description?.slice(0, 50)}...</p>
      <div className="w-40">
        <a
          className="group flex h-min ring-none items-center justify-center hover:opacity-95 disabled:opacity-50 rounded-lg py-2 px-4 font-dm focus:outline-none !ring-transparent  border border-footerGreen border-b-footerGreen border-b-4 hover:border active:border bg-white  active:bg-gray-100  text-sm sm:text-base"
          href={`/blog/${blogPost?.id}`}
        >
          <span className="mr-3">Read More</span>
          <FaArrowRight className="text-header" />
        </a>
      </div>
    </div>
  );
};

export default BlogsCard;
