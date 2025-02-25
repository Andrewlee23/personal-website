function Projects() {
    const projects = [
      { id: 1, title: "This website lol", description: "2025 - What do I even write here? you're looking at it", tools:"/React /TailwindCSS /Vite", link: "https://www.youtube.com/watch?v=VHcpSCmHqHM&ab_channel=RickRollWithDifferentLink  " },
      { id: 2, title: "SmartPom", description: "2025 - Ai powered pomodoro timer", tools:"/OpenAI /Java /React /CSS", link: "https://devpost.com/software/smartpom" },
      { id: 3, title: "ByteBattle", description: "2024 - 1v1 code battling, a combination of typeracer and leetcode",tools:"/React /Java /CSS", link: "https://devpost.com/software/bytebattle-7g25ck" },
      { id: 4, title: "SSE Website Rebuild", description: "2023 - Current Website rebuild for the society of software engineers", tools:"/TypeScript /React", link: "https://github.com/rit-sse/WebsiteTheSSEquel" },
      
    ];
  
    return (
      <section id="projects" className="text-xl py-20 bg-darkergrey text-mutedgrey font-pixel">
        <h2 className="text-5xl text-center text-white">My Projects</h2>
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="p-6 bg-soft rounded-lg shadow-lg">
              <h3 className="text-3xl">{project.title}</h3>
              <p className="mt-2 text-2xl">{project.description}</p>
              <p className="mt-2 text-xl text-mutedgrey">Tools: {project.tools}</p>
              <a href={project.link} className="text-2xl mt-4 inline-block text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;