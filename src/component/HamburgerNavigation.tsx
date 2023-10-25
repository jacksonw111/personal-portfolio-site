export const HamburgerNavigation = () => {
  const toggleMenu = () => {};
  return (
    <nav>
      <div className="logo">John Doe</div>
      <div>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={toggleMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
