import React from 'react';

const Contact = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#003135] to-[#024950] text-center px-6 sm:px-12 py-16"
    >
      {/* Section Heading */}
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#AFDDE5]">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          I'd love to hear from you! Whether it’s a project, collaboration, or
          just a chat, feel free to reach out.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl bg-[#024950] rounded-lg shadow-lg p-8">
        <form
          action="#"
          method="post"
          className="flex flex-col space-y-6 text-left"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="text-gray-300 block mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-[#003135] text-[#AFDDE5] focus:outline-none focus:ring-2 focus:ring-[#0FA4AF]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-gray-300 block mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@domain.com"
              className="w-full px-4 py-3 rounded-lg bg-[#003135] text-[#AFDDE5] focus:outline-none focus:ring-2 focus:ring-[#0FA4AF]"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="text-gray-300 block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message here..."
              className="w-full px-4 py-3 rounded-lg bg-[#003135] text-[#AFDDE5] focus:outline-none focus:ring-2 focus:ring-[#0FA4AF]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#0FA4AF] text-[#003135] font-semibold rounded-lg hover:bg-[#964734] hover:text-white transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 flex space-x-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#AFDDE5] text-2xl hover:text-[#0FA4AF] transition duration-300"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#AFDDE5] text-2xl hover:text-[#0FA4AF] transition duration-300"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#AFDDE5] text-2xl hover:text-[#0FA4AF] transition duration-300"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
