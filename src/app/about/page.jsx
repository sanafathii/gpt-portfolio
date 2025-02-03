import Image from "next/image";

export default function About() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      <div className="mt-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3">
          <Image
            src="/homepage-image.avif"
            alt="Sana Fathi"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="md:w-2/3 md:ml-8 mt-4 md:mt-0">
          <p className="text-lg">
            Hello! I am Sana Fathi, a passionate Front-End Developer with a keen
            eye for design and a commitment to creating seamless user
            experiences. I specialize in building responsive and interactive web
            applications using modern technologies.
          </p>
          <h2 className="text-2xl font-semibold mt-4">Education</h2>
          <p className="text-lg mt-2">
            I hold a degree in Computer Science, which has provided me with a
            solid foundation in software development principles and best
            practices.
          </p>
          <h2 className="text-2xl font-semibold mt-4">Work Experience</h2>
          <p className="text-lg mt-2">
            With over x years of experience in the industry, I have worked on a
            variety of projects, ranging from small business websites to
            large-scale applications. My roles have involved collaborating with
            cross-functional teams to deliver high-quality products that meet
            client needs.
          </p>
          <h2 className="text-2xl font-semibold mt-4">Skills</h2>
          <ul className="list-disc list-inside text-lg mt-2">
            <li>HTML5, CSS3, JavaScript</li>
            <li>React.js, Next.js</li>
            <li>Responsive Web Design</li>
            <li>Version Control (Git)</li>
            <li>UI/UX Design Principles</li>
            <li>Cross-Browser Compatibility</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-4">Interests</h2>
          <p className="text-lg mt-2">
            Beyond coding, I enjoy exploring the latest trends in web
            development, contributing to open-source projects, and attending
            tech meetups. In my free time, I love hiking, photography, and
            experimenting with new recipes.
          </p>
        </div>
      </div>
    </main>
  );
}
