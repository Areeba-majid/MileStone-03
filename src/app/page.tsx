import React from 'react'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Blogs from '@/components/Blogs'
import Blog from '@/components/Blog'
import Contact from './contact/Page'



const page = () => {
  return (
    <div>
      <nav className="border border-b-white bg-gray-800  text-white">
      <div className="container h-20  mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">Blog World .💻🖋</h1>
        <ul className="flex space-x-4 text-lg">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#Contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
      <Hero/>
      <Blogs/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
