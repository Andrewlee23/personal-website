function Header({ scrollToSection, homeRef, projectsRef, contactRef }) {
    return (
      <header className="w-full p-5 fixed top-0 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold cursor-pointer" onClick={() => scrollToSection(homeRef)}>
            My Portfolio
          </h1>
          <nav>
            <ul className="flex space-x-5">
              <li>
                <button onClick={() => scrollToSection(homeRef)} className="hover:text-gray-400">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(projectsRef)} className="hover:text-gray-400">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection(contactRef)} className="hover:text-gray-400">
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  