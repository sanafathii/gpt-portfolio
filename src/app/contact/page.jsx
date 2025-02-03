"use client";

import { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [message, setMessage] = useState("");

  const chatbotScript = `
    (function () {
      var tidioScript = document.createElement("script");
      tidioScript.src = "//code.tidio.co/yourTidioCode.js"; // replace with your Tidio code
      tidioScript.async = true;
      document.body.appendChild(tidioScript);
    })();
  `;

  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      <form className="bg-white p-6 shadow-md rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Send me a message:</h2>
        <textarea
          className="w-full h-32 p-4 border border-gray-300 rounded-md mb-4"
          placeholder="Your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="bg-yellow-400 text-white px-6 py-2 rounded-md">
          Send
        </button>
      </form>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Find Me on the Map:</h2>
        <div className="w-full h-64 bg-gray-300 rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.497619450389!2d-74.0445001847347!3d40.74881727932785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ad5b65eb27%3A0x892a42be8b4908c4!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1616518221833!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex space-x-6">
        <a
          href="https://www.linkedin.com/in/sanafathi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/sanafathii"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://twitter.com/sanafathi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          <FaTwitter size={30} />
        </a>
        <a href="mailto:sana.fathi30@gmail.com" className="text-gray-600">
          <FaEnvelope size={30} />
        </a>
      </div>

      <script dangerouslySetInnerHTML={{ __html: chatbotScript }} />
    </section>
  );
}
