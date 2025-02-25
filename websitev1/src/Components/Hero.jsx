function Hero() {
    return (
      <section className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white text-center">
        <h1 className="text-5xl font-bold">Welcome</h1>
        <p className="text-lg mt-4">Software Engineer studying at the Rochester Institute of Technology</p>
        <a href="#projects" className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600">
          Projects
        </a>
      </section>
    );
  }
  
  export default Hero;