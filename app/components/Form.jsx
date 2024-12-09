"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import Image from "next/image";

const Form = () => {
  const form = useRef();
  const [sendMsg, setSendMsg] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  emailjs.init({
    publicKey: process.env.EMAILJS,
  });

  useEffect(() => {
    const messageSent = sessionStorage.getItem("messageSent");
    if (messageSent === "true") {
      setIsButtonDisabled(true);
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (isButtonDisabled) {
      setSendMsg({
        type: "error",
        msg: "You have already sent a message",
      });
      setTimeout(() => {
        setSendMsg({});
      }, 3000);
      return;
    }

    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS,
        }
      );
      console.log(response.status);
      if (response.status === 200) {
        setSendMsg({ type: "success", msg: "Message successfully sent!" });
        sessionStorage.setItem("messageSent", "true");
        setIsButtonDisabled(true);
        form.current.reset();
      } else {
        setSendMsg({
          type: "error",
          msg: "An error occurred while sending the message.",
        });
      }
    } catch (e) {
      setSendMsg({
        type: "error",
        msg: "Failed to send email",
      });
    }

    setTimeout(() => {
      setSendMsg({});
    }, 3000);
  }

  return (
    <>
      <Image
        src="/images/background-img.png"
        alt="Dotted transparent background"
        width="1440"
        height="645"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="max-w-screen-xl mx-auto py-28 z-10 relative">
        <h2 className="font-medium text-5xl text-left w-full max-w-3xl">
          Let’s build an Unique Script together!
        </h2>
        <form
          ref={form}
          onSubmit={handleSubmit}
          id="main-form"
          className="flex flex-col items-end w-2/4 mt-20 gap-9"
        >
          <div className="flex justify-between w-full gap-14">
            <div className="flex flex-col items-start gap-1 w-full">
              <label htmlFor="username" className="text-2xl">
                Your username
              </label>
              <input
                type="text"
                name="form_username"
                id="username"
                placeholder="Enter username"
                className="bg-transparent border-b-[1px] border-white-custom py-2 px-1 w-full outline-none text-white-custom"
              />
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <label htmlFor="discord" className="text-2xl font-medium">
                Your discord
              </label>
              <input
                type="text"
                name="form_discord"
                id="discord"
                placeholder="Discord name"
                className="bg-transparent border-b-[1px] border-white-custom py-2 px-1 w-full outline-none text-white-custom"
              />
            </div>
          </div>
          <div className="flex justify-between w-full gap-14">
            <div className="flex flex-col items-start gap-1 w-full">
              <label htmlFor="server" className="text-2xl font-medium">
                Your server
              </label>
              <input
                type="text"
                name="form_server"
                id="server"
                placeholder="Server name"
                className="bg-transparent border-b-[1px] border-white-custom py-2 px-1 w-full outline-none text-white-custom"
              />
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <label htmlFor="discord" className="text-2xl font-medium">
                Budget
              </label>
              <input
                type="text"
                name="form_budget"
                id="budget"
                placeholder="Enter budget"
                className="bg-transparent border-b-[1px] border-white-custom py-2 px-1 w-full outline-none text-white-custom"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <label htmlFor="message" className="text-2xl font-medium">
              Your message
            </label>
            <textarea
              name="form_message"
              id="message"
              placeholder="Type here"
              wrap="soft"
              row="6"
              className="bg-transparent resize-none border-b-[1px] border-white-custom py-2 px-1 w-full outline-none text-white-custom"
            ></textarea>
          </div>

          <div className="flex justify-between items-center w-full">
            <div className="flex-1">
              {sendMsg?.msg?.length > 0 && (
                <p
                  className={`${
                    sendMsg?.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {sendMsg.msg}
                </p>
              )}
            </div>

            <Button text={"Send"} link="" type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
