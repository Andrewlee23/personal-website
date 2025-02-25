function Contact() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-darkergrey text-white">
        <h2 className="text-7xl font-pixel  mb-6">Get in Touch</h2>
        <p className="text-3xl font-pixel text-gray-400 mb-8">You can reach me through the following platforms:</p>
        
        <div className="font-pixel flex flex-col space-y-4 text-2xl">
          <a href="mailto:leea7633@gmail.com" className="hover:text-blue-400 transition">
            📧 Email: leea7633@gmail.com
          </a>
          <a href="https://linkedin.com/in/al627" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            💼 LinkedIn: linkedin.com/in/al627
          </a>
          <a href="https://github.com/Andrewlee23" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            🐙 GitHub: github.com/Andrewlee23
          </a>
          <a href="https://www.instagram.com/dltkdwns._/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          📷 Instagram: @dltkdwns._
          </a>
        </div>
      </section>
    );
  }
  
  export default Contact;
  