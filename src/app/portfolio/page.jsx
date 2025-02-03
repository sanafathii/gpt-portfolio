"use client";

import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      id: 1,
      title: "CRM Application",
      category: "Web Development",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      image: "/projects/crm-next.jpg",
      description: "A powerful CRM application built with React and Next.js.",
      testimonial:
        "This CRM application increased our team's productivity by 40%. - Client A",
    },
    {
      id: 2,
      title: "Real Estate Website",
      category: "Web Development",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      image: "/projects/real-estate.jpg",
      description:
        "A dynamic real estate platform built using React and Next.js.",
      testimonial:
        "The website helped us showcase properties efficiently. - Client B",
    },
    {
      id: 3,
      title: "Food Ordering System",
      category: "Mobile Development",
      technologies: ["React Native", "Node.js"],
      image: "/projects/next-food.jpg",
      description:
        "An intuitive food ordering mobile app built with React Native.",
      testimonial: "This app improved our online orders by 30%. - Client C",
    },
    {
      id: 4,
      title: "E-commerce Store",
      category: "E-commerce",
      technologies: ["React", "Node.js", "Stripe"],
      image: "/projects/react-store.jpg",
      description:
        "A fully functional e-commerce platform built using React and Node.js.",
      testimonial:
        "The store saw a 50% increase in sales after launch. - Client D",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" ||
      project.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-6">My Portfolio</h1>
      <div className="mb-10">
        <button
          className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-4"
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-4"
          onClick={() => setSelectedCategory("Web Development")}
        >
          Web Development
        </button>
        <button
          className="bg-yellow-400 text-white px-4 py-2 rounded-md mr-4"
          onClick={() => setSelectedCategory("E-commerce")}
        >
          E-commerce
        </button>
        <button
          className="bg-yellow-400 text-white px-4 py-2 rounded-md"
          onClick={() => setSelectedCategory("Mobile Development")}
        >
          Mobile Development
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white p-6 shadow-md rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-md cursor-pointer"
              onClick={() => {
                setIsOpen(true);
                setCurrentImage(project.id - 1);
              }}
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-4 italic text-gray-600">{project.testimonial}</p>
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={projects[currentImage].image}
                alt={projects[currentImage].title}
                className="max-w-full max-h-96 object-contain"
              />
              <button
                className="absolute top-2 right-2 bg-gray-700 text-white rounded-full p-2"
                onClick={() => setIsOpen(false)}
              >
                &times;
              </button>
            </div>
            <h3 className="text-xl font-semibold mt-4">
              {projects[currentImage].title}
            </h3>
            <p className="text-gray-600">
              {projects[currentImage].description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {projects[currentImage].technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-4 italic text-gray-600">
              {projects[currentImage].testimonial}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
