"use client";
import React from "react";
import Image from "next/image";

import { Poppins } from "next/font/google";

const fontPoopins600 = Poppins({ weight: "600", subsets: ["latin"] });
const fontPoopins400 = Poppins({ weight: "400", subsets: ["latin"] });
const fontPoopins500 = Poppins({ weight: "500", subsets: ["latin"] });

const Contact = () => {
  return (
    <div
      className="border border-black min-h-screen bg-cover bg-center opacity-80"
      style={{
        backgroundImage:
          "url('https://ucscextension-live-28cd95cf77884d15bb06-01c17c1.divio-media.net/images/AI-St.2e16d0ba.format-jpeg.fill-2400x858-c100.width-1920.jpg')",
      }}
    >
      <div className="min-h-screen  flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl w-full shadow-md rounded-md bg-slate-200 p-8">
          <h2
            className={`${fontPoopins600.className} text-center text-2xl font-extrabold text-[#000000] mb-4`}
          >
            Get In Touch With Us
          </h2>
          <p
            className={`${fontPoopins400.className} text-slate-500 text-sm mb-8 text-center`}
          >
            For more information about our Blogs & services, please feel free
            to drop us <br /> an email. Our staff is always here to help you out.
            Do not hesitate!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Info Section */}
            <div className="space-y-6">
              <Image
                src={"/contact/c4.png"}
                alt="map_icon"
                width={17}
                height={27.59}
                className="float-left pt-4"
              />
              <div className={`${fontPoopins500.className}`}>
                <h3 className="text-[20px] font-medium text-gray-900 ml-7">
                  Address
                </h3>
                <p className="text-[#000000] text-[16px] ml-7">
                  235 5th SE Avenue, New
                  <br /> York NY10000, United
                  <br /> States
                </p>
              </div>
              <Image
                src={"/contact/c5.png"}
                alt="contact_img"
                width={17}
                height={27.59}
                className="float-left pt-4"
              />
              <div className={`${fontPoopins500.className}`}>
                <h3 className="text-[20px] font-medium text-gray-900 ml-7 pt-4">
                  Phone
                </h3>
                <p className="text-[#000000] text-[16px] ml-7">
                  Mobile: +1 (84) 546-6789 <br />
                  Hotline: +1 (84) 546-6789
                </p>
              </div>
              <Image
                src={"/contact/c6.png"}
                alt="clock"
                width={17}
                height={27.59}
                className="float-left pt-4"
              />
              <div className={`${fontPoopins500.className}`}>
                <h3 className="text-[20px] font-medium text-gray-900 ml-7 pt-4">
                  Working Time
                </h3>
                <p className="text-[#000000] text-[16px] ml-7">
                  Monday-Friday: 9:00 - 20:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>

            {/* Form Section */}
            <form className={`${fontPoopins500.className} space-y-6`}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#000000]"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                  placeholder="Abc"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#000000]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                  placeholder="Abc@def.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#000000]"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                  placeholder="This is optional"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#000000]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                  placeholder="Hi! I’d like to ask about..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[170px] h-[50px] bg-[#029FAE] rounded-md text-white py-2 px-4 shadow-sm focus:outline-none focus:ring-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

