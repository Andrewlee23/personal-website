function Contact() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-400 mb-8">You can reach me through the following platforms:</p>
        
        <div className="flex flex-col space-y-4 text-lg">
          <a href="mailto:leea7633@gmail.com" className="hover:text-blue-400 transition">
            📧 Email: leea7633@gmail.com
          </a>
          <a href="https://linkedin.com/in/al627" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            💼 LinkedIn: linkedin.com/in/al627
          </a>
          <a href="https://github.com/Andrewlee23" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            🐙 GitHub: github.com/Andrewlee23
          </a>
          <a href="https://twitter.com/lemonadecslol" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            🐦 Twitter: @lemonadecslol
          </a>
        </div>
      </section>
    );
  }
  
  export default Contact;
  