import BurgerNavbar from "./BurgerNavbar";
import Navbar from "./Navbar";

function FixedNavbar() {
  return (
    <header className="w-full fixed bg-dark z-10 opacity-90">
      <BurgerNavbar />
      <Navbar className="w-11/12" />
    </header>
  );
}

export default FixedNavbar;
