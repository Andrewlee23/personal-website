function Hero({ scrollToSection, homeRef, projectsRef, contactRef }) {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-darkergrey text-white text-center">
      <h1 className="text-5xl font-pixel flex items-center">
        <span> 😲 Andrew Lee 🤓 </span>
      </h1>
      <p className="text-2xl mt-2 font-pixel font-weight: bold">Software Engineer / <span className="text-2xl text-yellow-400 font-pixel font-weight: bold">Gamer</span></p>

      <h2 className="mt-10 text-2xl font-light font-pixel ">My personal statsheet!</h2>
      <nav className="mt-6 flex space-x-6 text-lg font-pixel">
        
        <button onClick={() => scrollToSection(homeRef)} className="text-pink-400 hover:underline">
          [H]<span className="text-gray-400">ome</span>
        </button>
        <button onClick={() => scrollToSection(projectsRef)} className="text-blue-400 hover:underline">
          [P]<span className="text-gray-400">rojects</span>
        </button>
        <button onClick={() => scrollToSection(contactRef)} className="text-green-400 hover:underline">
          [C]<span className="text-gray-400">ontact</span>
        </button>
      </nav>
      
    </section>

  );
}

export default Hero;
