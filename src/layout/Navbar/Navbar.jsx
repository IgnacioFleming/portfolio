function Navbar({ className }) {
  return (
    <nav className={`h-24 flex items-center justify-end ${className}`}>
      <ul className="flex justify-end items-center gap-5 h-full text-lg font-semibold navbar">
        <a href="#home">
          <li>HOME</li>
        </a>

        <a href="#projects">
          <li>PROJECTS</li>
        </a>
        <a href="#skills">
          <li>SKILLS</li>
        </a>
        <a href="#aboutMe">
          <li>ABOUT ME</li>
        </a>
        <a href="#contact">
          <li>CONTACT</li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
