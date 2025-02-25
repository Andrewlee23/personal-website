function Projects() {
    const projects = [
      { id: 1, title: "ByteBattle", description: "1v1 code battling, a combination of typeracer and leetcode", link: "https://devpost.com/software/bytebattle-7g25ck" },
      { id: 2, title: "SmartPom", description: "Ai powered pomodoro timer", link: "https://devpost.com/software/smartpom" },
      { id: 3, title: "SSE Website Rebuild", description: "Website rebuild for the society of software engineers", link: "https://github.com/rit-sse/WebsiteTheSSEquel" },
      
    ];
  
    return (
      <section id="projects" className="py-20 bg-mutedgrey text-white">
        <h2 className="text-3xl text-center font-bold">My Projects</h2>
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;