function Navbar() {
  return (
    <nav className="h-24 flex items-center justify-between">
      <div>
        <img className="h-14 w-14 rounded-full" src="https://pymstatic.com/105432/conversions/burger-king-logo-default.jpg" alt="Logo" />
      </div>
      <ul className="flex justify-end items-center gap-10 h-full">
        <li>Home</li>
        <li>Proyects</li>
        <li>Skills</li>
        <li>About Me</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
