function Involvements() {
    const activities = [
      { id: 1, title: "Society of Software Engineers", description: "Head of Public Relations and Mentor", year: "2024 - Current" },
      { id: 2, title: "Riot Gaming Club", description: "Event Coordinator", year: "2023 - Current" },
      { id: 3, title: "Brickhack11 Hackathon", description: "Competed in hackathon hosted by the Major League Hacking", year: "2025" },
      { id: 4, title: "Hack.Comms Hackathon", description: "Competed in hackathon hosted by the Computing Orginization of Multicultural Students", year: "2024" },
      { id: 5, title: "Course Assistant", description: "Course Assistant for Software Development and Problem Solving I, helping students with Python", year: "2024" },
    ];
  
    return (
      <section id="involvements" className="py-10 bg-darkergrey font-pixel text-4xl text-white text-center">
        <h2 className="text-5xl font-pixel">🔗 Involvements</h2>
        <div className="text-mutedgrey text-2xl max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div key={activity.id} className="p-4 bg-soft rounded-lg">
              <h3 className="text-3xl font-pixel">{activity.title} ({activity.year})</h3>
              <p className="text-mutedgrey mt-2">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Involvements;