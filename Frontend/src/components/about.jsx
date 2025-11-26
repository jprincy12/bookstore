import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
        <Navbar/>

      {/* Hero Section */}
      <section className="text-center mt-12 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Hello, Welcome to the BookStore</h2>
        <p className="text-gray-600 text-lg italic mb-6">
          Learn something new everyday!!!
        </p>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta
          nostrum provident, eos, at suscipit, magnam similique veritatis
          reiciendis dolor inventore corrupti quibusdam. Enim, eos recusandae
          omnis pariatur dolore voluptas?
        </p>
      </section>

      {/* Email Banner */}
      <section className="mt-16 bg-gray-100 rounded-2xl p-10 text-center max-w-4xl mx-auto shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Email</h3>
        <p className="text-gray-700 mb-6">
          Stay updated with our latest book offers and recommendations.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-1/2 mx-auto p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
        />
      </section>
      <Footer/>
    </div>
  );
}

export default About;