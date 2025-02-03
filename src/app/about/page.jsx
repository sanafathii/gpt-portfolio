"use client";

export default function AboutMe() {
  const timelineData = [
    {
      title: "Software Engineer at ABC Corp.",
      date: "2022 - Present",
      description:
        "Developing high-quality user interfaces using React and Next.js.",
    },
    {
      title: "Junior Developer at XYZ Ltd.",
      date: "2020 - 2022",
      description:
        "Worked on front-end development using HTML, CSS, JavaScript, and React.",
    },
    {
      title: "Bachelor's Degree in Computer Science",
      date: "2016 - 2020",
      description:
        "Studied full-stack development, algorithms, data structures, and web technologies.",
    },
  ];

  const skillsData = [
    { skill: "React.js", level: 80 },
    { skill: "Next.js", level: 75 },
    { skill: "CSS / Tailwind CSS", level: 90 },
    { skill: "JavaScript", level: 85 },
  ];

  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Timeline</h2>
        <div className="relative">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-8 flex items-center">
              <div className="absolute left-[-20px] top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500">{item.date}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        {skillsData.map((skill, index) => (
          <div key={index} className="mb-6">
            <p className="text-lg font-medium">{skill.skill}</p>
            <div className="w-full bg-gray-300 h-2 rounded-full">
              <div
                className="h-2 rounded-full bg-yellow-400"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">{skill.level}% Proficient</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-12">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-semibold mb-4">Personal Introduction</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Personal Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
