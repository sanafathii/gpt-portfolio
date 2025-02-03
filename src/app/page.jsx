"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Animate the hero section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="h-screen bg-white text-gray-900">
      <section className="flex justify-center items-center h-full text-center p-8 bg-gradient-to-r from-[#1A202C] to-[#2D3748]">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate__animated animate__fadeIn">
            Hi, I'm <span className="text-yellow-400">Sana Fathi</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
            A passionate Front-End Developer focused on building intuitive user
            experiences.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <button
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
              onClick={() => router.push("/projects")}
            >
              See My Work
            </button>
            <button
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-full shadow-lg hover:bg-yellow-100 transition duration-300"
              onClick={() => router.push("/contact")}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <section
        className={`p-8 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 text-center rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">React.js</h3>
            <p className="text-gray-600">
              Building dynamic and responsive user interfaces with React.
            </p>
          </div>
          <div className="p-6 bg-gray-100 text-center rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">Next.js</h3>
            <p className="text-gray-600">
              Creating fast, server-side rendered React applications using
              Next.js.
            </p>
          </div>
          <div className="p-6 bg-gray-100 text-center rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">CSS & Tailwind</h3>
            <p className="text-gray-600">
              Styling websites with custom CSS and utility-first frameworks like
              Tailwind.
            </p>
          </div>
        </div>
      </section>

      <section className="p-8 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Project One</h3>
            <p className="text-gray-600">
              A brief description of the project and what I accomplished.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Project Two</h3>
            <p className="text-gray-600">
              A brief description of the project and what I accomplished.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Project Three</h3>
            <p className="text-gray-600">
              A brief description of the project and what I accomplished.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
