"use client";

import React, { useState } from "react";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: "What is Agent in Artificial Intelligence",
      excerpt: "Discover tips and tricks to master AI Agent ....",
      image: "https://dmwebsoft.com/wp-content/uploads/2024/09/The-Future-is-Now-AI-Powered-Dev-Tools-DM-WebSoft-LLP.webp",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7279960966354665475/",
    },
    {
      id: 2,
      title: "Human vs Artificial Intelligence",
      excerpt: "HumAN vs AI.....",
      image: "https://mychessets.com/cdn/shop/articles/text-to-image_4eb264d3-9037-4ffc-a7aa-7582cd4f40d3.png?v=1714752472",
      link: "https://www.linkedin.com/feed/update/urn:li:share:7279981306782879745/",
    },
    {
      id: 3,
      title: "Next.js: The Future of Web Development",
      excerpt: "Why Next.js is a game-changer for web development.",
      image: "https://sigmato.com/wp-content/uploads/2024/08/next-js.webp",
      link: "https://www.linkedin.com/feed/update/urn:li:share:7279984624313720834/",
    },
    {
      id: 4,
      title: "How to Learn JavaScript Effectively",
      excerpt: "Discover tips and tricks to master JavaScript in no time.",
      image: "https://i1.wp.com/blog.alexdevero.com/wp-content/uploads/2016/11/6-Quick-Easy-Tips-on-How-to-Learn-JavaScript-small.jpg?fit=1024%2C586&ssl=1",
      link: "https://www.linkedin.com/feed/update/urn:li:share:7279985693672583168",
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState({
    title: "",
    excerpt: "",
    image: "",
    link: "",
  });

  const handleEdit = (blog: Blog) => {
    setEditingId(blog.id);
    setEditData(blog);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === editingId ? { ...blog, ...editData } : blog
      )
    );
    setEditingId(null);
    setEditData({ title: "", excerpt: "", image: "", link: "" });
  };
  return (
    <div
      className="opacity-90 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://www.drcf.org.uk/siteassets/drcf/images/hero-ai-digital-hub.jpg?width=1920&height=1280&quality=80')", 
      }}
    >
      <main className="container mx-auto p-4">
        <h2 className="text-4xl text-center font-bold mb-6 text-white">Latest Blogs ✍🏻️</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title || "Default Blog Image"}
                className="w-full h-40 object-cover border-4 border-x-amber-300"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{blog.title || "Untitled Blog"}</h3>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                {blog.link ? (
                  <a
                    href={blog.link}
                    className="text-indigo-500 hover:underline mt-4 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                ) : (
                  <span className="text-gray-400 italic">No link available</span>
                )}
                <button
                  onClick={() => handleEdit(blog)}
                  className="ml-4 font-bold text-blue-500 underline"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {editingId && (
          <div className="bg-white p-4 rounded shadow-md mt-8">
            <h3 className="text-3xl font-bold mb-4">Edit Blog</h3>
            <div className="grid gap-4">
              <input
                type="text"
                name="title"
                value={editData.title}
                onChange={handleChange}
                placeholder="Title"
                className="border p-2 rounded w-full"
              />
              <textarea
                name="excerpt"
                value={editData.excerpt}
                onChange={handleChange}
                placeholder="Excerpt"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                name="image"
                value={editData.image}
                onChange={handleChange}
                placeholder="Image URL"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                name="link"
                value={editData.link}
                onChange={handleChange}
                placeholder="Link"
                className="border p-2 rounded w-full"
              />
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
