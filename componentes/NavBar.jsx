export const NavBar = ({ navItems, activeMovile, handleMeny }) => {
  return (
    <nav className={`header__nav ${activeMovile ? "isActiveMenu" : ""}`}>
      <ul className="nav__ul">
        {navItems.map((item, index) => {
          const titleLower = item.toLowerCase().split(" ")[0];
          return (
            <li key={index} className="nav__item">
              <a href="`#${titleLower}`"></a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
