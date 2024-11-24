import React from "react";

function Contact() {
  return (
    <section className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form action="#" method="POST" className="grid grid-cols-1 gap-4 max-w-md mx-auto">
        <input type="text" name="name" placeholder="Your Name" className="p-2 bg-gray-800 rounded text-white" />
        <input type="email" name="email" placeholder="Your Email" className="p-2 bg-gray-800 rounded text-white" />
        <textarea name="message" placeholder="Your Message" rows="4" className="p-2 bg-gray-800 rounded text-white"></textarea>
        <button type="submit" className="p-2 bg-blue-500 rounded text-white hover:bg-blue-600">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;