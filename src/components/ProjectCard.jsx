import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={250}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <div className="flex mt-4 space-x-4">
          <Link
            href={project.demoLink}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Live Demo
          </Link>
          <Link
            href={project.repoLink}
            target="_blank"
            className="text-gray-500 hover:underline"
          >
            GitHub Repo
          </Link>
        </div>
      </div>
    </div>
  );
}
