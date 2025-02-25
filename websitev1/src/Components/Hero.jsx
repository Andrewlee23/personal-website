function Hero({ scrollToSection, contactRef }) {
    return (
      <section className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white text-center">
        <h1 className="text-5xl font-bold">Welcome</h1>
        <p className="text-lg mt-4">Software Engineer studying at the Rochester Institute of Technolog</p>
        <button
          onClick={() => scrollToSection(contactRef)}
          className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
        >
          Get in Touch
        </button>
      </section>
    );
  }
  
  export default Hero;
  