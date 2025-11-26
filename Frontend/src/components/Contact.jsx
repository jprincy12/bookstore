import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
          <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-10 grid md:grid-cols-2 gap-10">
              {/* Left Section */}
              <div className="space-y-6">
                  <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
                  <p className="text-gray-600 text-lg">
                      We'd love to hear from you! Fill out the form or reach us using the
                      details below.
                  </p>

                  <div className="space-y-4">
                      <div>
                          <h2 className="font-semibold text-gray-800 text-xl">📍 Address</h2>
                          <p className="text-gray-600">Kathmandu, Nepal</p>
                      </div>

                      <div>
                          <h2 className="font-semibold text-gray-800 text-xl">📞 Phone</h2>
                          <p className="text-gray-600">+977-9800000000</p>
                      </div>

                      <div>
                          <h2 className="font-semibold text-gray-800 text-xl">✉️ Email</h2>
                          <p className="text-gray-600">info@example.com</p>
                      </div>
                  </div>
              </div>

              {/* Right form section */}
              <form className="space-y-5">
                  <div>
                      <label className="text-gray-700 font-medium">Full Name</label>
                      <input
                          type="text"
                          className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
                          placeholder="Enter your name" />
                  </div>

                  <div>
                      <label className="text-gray-700 font-medium">Email</label>
                      <input
                          type="email"
                          className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
                          placeholder="Enter your email" />
                  </div>

                  <div>
                      <label className="text-gray-700 font-medium">Message</label>
                      <textarea
                          className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
                          rows="5"
                          placeholder="Write your message here..."
                      ></textarea>
                  </div>

                  <button
                      type="submit"
                      className="w-full bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition duration-300"
                  >
                      Send Message
                  </button>
              </form>
          </div>
      </div>
      <Footer/>
      </>
  );
}

export default Contact;
