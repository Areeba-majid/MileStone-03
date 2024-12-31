"use client";

import React, { useState } from "react";
import Image from 'next/image'

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

export default function EditableBlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [blogData, setBlogData] = useState<Blog>({
    id: 0,
    title: "",
    excerpt: "",
    image: "",
    link: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlogData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddBlog = () => {
    if (!blogData.title || !blogData.excerpt) {
      alert("Please fill out the title and excerpt.");
      return;
    }
    setBlogs((prev) => [
      ...prev,
      { ...blogData, id: Date.now() },
    ]);
    setBlogData({ id: 0, title: "", excerpt: "", image: "", link: "" });
  };

  const handleEditBlog = (id: number) => {
    const blogToEdit = blogs.find((blog) => blog.id === id);
    if (blogToEdit) {
      setEditingId(id);
      setBlogData(blogToEdit);
    }
  };

  const handleSaveBlog = () => {
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === editingId ? { ...blog, ...blogData } : blog
      )
    );
    setEditingId(null);
    setBlogData({ id: 0, title: "", excerpt: "", image: "", link: "" });
  };

  const handleDeleteBlog = (id: number) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  return (
    <div
      className="h-full bg-gray-100 pl-[45vh] p-4 border border-blue-300"
      style={{
        backgroundImage: "url('https://ucscextension-live-28cd95cf77884d15bb06-01c17c1.divio-media.net/images/ai-essentials-course-AISV-813-ucs.format-jpeg.width-1920.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl font-bold text-center mb-6 text-white">
        Editable Blog Page
      </h1>

      <div className="bg-white w-[900px] box-content shadow-md rounded p-4 mb-6">
        <h2 className="text-2xl font-bold mb-4">{editingId ? "Edit Blog" : "Add New Blog"}</h2>
        <input
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="border p-2 rounded w-full mb-2"
        />
        <textarea
          name="excerpt"
          value={blogData.excerpt}
          onChange={handleChange}
          placeholder="Blog Excerpt"
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          name="image"
          value={blogData.image}
          onChange={handleChange}
          placeholder="Image URL (optional)"
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          name="link"
          value={blogData.link}
          onChange={handleChange}
          placeholder="Link URL (optional)"
          className="border p-2 rounded w-full mb-2"
        />
        {editingId ? (
          <button
            onClick={handleSaveBlog}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={handleAddBlog}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Blog
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={blog.image || "https://via.placeholder.com/150"}
              alt={blog.title || "Default Blog Image"}
              width={500}  // You need to specify width and height
              height={300} // You need to specify width and height
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{blog.title || "Untitled Blog"}</h3>
              <p className="text-gray-600 mt-2">{blog.excerpt}</p>
              {blog.link && (
                <a
                  href={blog.link}
                  className="text-indigo-500 hover:underline mt-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              )}
              <div className="mt-4">
                <button
                  onClick={() => handleEditBlog(blog.id)}
                  className="text-blue-500 underline mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteBlog(blog.id)}
                  className="text-red-500 underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
