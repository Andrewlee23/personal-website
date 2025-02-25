function Header() {
    return (
      <header className="w-full p-5 fixed top-0 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Andrew Lee</h1>
          <nav>
            <ul className="flex space-x-5">
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;