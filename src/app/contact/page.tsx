import React from "react";
import { Grid } from "@mui/material";
import { FaRegMap } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { myContact } from "@/mocks/my-contact";

const Contact = () => {
  const renderIcon = (name: string) => {
    switch (name) {
      case "Address":
        return <FaRegMap className="text-[1.5rem]" />;
      case "Freelance":
        return <IoPersonOutline className="text-[1.5rem]" />;
      case "Email":
        return <AiOutlineMail className="text-[1.5rem]" />;
      case "Phone":
        return <FaRegAddressBook className="text-[1.5rem]" />;
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col justify-center mt-20  relative">
      <h1 className="text-h1Size font-acorn tracking-[-3px] sm:tracking-[-2px] font-[600] self-center justify-center">
        Contact
      </h1>
      <Grid container spacing={8}>
        <Grid item md={5} xs={12}>
          {" "}
          <div className="flex flex-col gap-6">
            {myContact?.map((c: any, index: any) => (
              <div className="flex flex-row gap-[8rem]" key={index}>
                <div className="relative">
                  <div className="border-2 border-solid shadow-xl  border-header rounded-[50%]  w-[56px] h-[56px] text-center flex items-center justify-center absolute top-0 left-0 after:mt-[-1px]  after:w-[40px] after:h-[2px] after:bg-black after:left-full after:absolute">
                    {renderIcon(c?.name)}
                  </div>
                </div>
                <div className="relative">
                  <p className="font-acorn font-bold italic">{c?.name}</p>
                  <p className="text-footerGreen">{c?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <form>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <label>
                  <span className="pl-3">Your Full Name</span>
                  <span className="block">
                    {" "}
                    <input
                      size={40}
                      className="py-0 mt-[10px] px-[30px] w-full h-[60px] outline-none bg-[#fff] border-2 border-solid border-header rounded-[30px]"
                    />
                  </span>
                </label>
              </Grid>
              <Grid item md={6} xs={12}>
                <label>
                  <span className="pl-3">Your Email Address</span>
                  <span className="block">
                    {" "}
                    <input
                      size={40}
                      className="py-0 mt-[10px] px-[30px] w-full h-[60px] outline-none bg-[#fff] border-2 border-solid border-header rounded-[30px]"
                    />
                  </span>
                </label>
              </Grid>
              <Grid item xs={12}>
                <label>
                  <span className="pl-3">Your Subject</span>
                  <span className="block">
                    {" "}
                    <input
                      size={40}
                      className="py-0 mt-[10px] px-[30px] w-full h-[60px] outline-none bg-[#fff] border-2 border-solid border-header rounded-[30px]"
                    />
                  </span>
                </label>
              </Grid>
              <Grid item xs={12}>
                <label>
                  <span className="pl-3">Your Message</span>
                  <span className="block">
                    <textarea
                      cols={40}
                      rows={10}
                      className="py-[20px] resize-none mt-[10px]  w-full h-[140px] outline-none bg-[#fff] border-2 border-solid border-header rounded-[30px]"
                    />
                  </span>
                </label>
              </Grid>
            </Grid>

            <div className="flex w-fill items-center justify-center mt-3">
              <button className="button">Send Message</button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
