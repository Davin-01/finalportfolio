// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [status, setStatus] = useState('');

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_bizc6ot', 'template_oy2nnwb', e.target, 'r6cQDTJSHQUdnVmlX')
//       .then(
//         (result) => {
//           setStatus('Message sent successfully!');
//           setFormData({
//             name: '',
//             email: '',
//             message: ''
//           });
//         },
//         (error) => {
//           setStatus('Something went wrong, please try again.');
//         }
//       );
//   };

//   return (
//     <section
//       className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#003135] via-[#024950] to-[#0FA4AF] text-center px-6 sm:px-12 py-16"
//     >
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-[#AFDDE5] rounded-full blur-3xl opacity-20"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#964734] rounded-full blur-3xl opacity-20"></div>
//       </div>

//       {/* Section Heading */}
//       <div className="mb-16 text-center">
//         <h2 className="text-4xl sm:text-5xl font-semibold text-[#AFDDE5]">
//           Get in Touch
//         </h2>
//         <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
//           Feel free to reach out for collaborations, projects, or just a friendly chat. I look forward to connecting with you!
//         </p>
//       </div>

//       {/* Contact Form */}
//       <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8">
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Name */}
//           <div className="flex flex-col">
//             <label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Full Names"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0FA4AF] transition"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="flex flex-col">
//             <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="example@gmail.com"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0FA4AF] transition"
//               required
//             />
//           </div>

//           {/* Message */}
//           <div className="flex flex-col">
//             <label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="5"
//               placeholder="Your message here..."
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0FA4AF] transition"
//               required
//             ></textarea>
//           </div>

//           {/* Status Message */}
//           {status && (
//             <div className="text-center text-lg font-semibold text-green-600 mt-4">
//               {status}
//             </div>
//           )}

//           {/* Submit Button */}
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="px-6 py-3 bg-[#0FA4AF] text-white font-semibold rounded-lg hover:bg-[#964734] transition duration-300 ease-in-out"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Social Media Links */}
//       <div className="mt-16 flex justify-center space-x-6">
//         <a
//           href="https://instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-3xl text-[#AFDDE5] hover:text-[#0FA4AF] transition duration-300 ease-in-out"
//           aria-label="Instagram"
//         >
//           <i className="fab fa-instagram"></i>
//         </a>
//         <a
//           href="https://twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-3xl text-[#AFDDE5] hover:text-[#0FA4AF] transition duration-300 ease-in-out"
//           aria-label="Twitter"
//         >
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a
//           href="https://whatsapp.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-3xl text-[#AFDDE5] hover:text-[#0FA4AF] transition duration-300 ease-in-out"
//           aria-label="WhatsApp"
//         >
//           <i className="fab fa-whatsapp"></i>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Contact;
