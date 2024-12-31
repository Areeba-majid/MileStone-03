"use client";

import React, { useState } from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for contacting us!");
  };

  return (
    <div
      className="h-full bg-gray-100 p-4 flex justify-center items-center border border-slate-400"
      style={{
        backgroundImage: "url('https://ucscextension-live-28cd95cf77884d15bb06-01c17c1.divio-media.net/images/ai-essentials-course-AISV-813-ucs.format-jpeg.width-1920.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full bg-white p-8 rounded-lg shadow-md max-w-lg ">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              rows={4}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
