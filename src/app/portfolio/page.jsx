import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects";

export default function Portfolio() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
