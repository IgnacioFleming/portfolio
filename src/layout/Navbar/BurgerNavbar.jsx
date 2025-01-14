import { GiHamburgerMenu } from "react-icons/gi";
function BurgerNavbar() {
  return (
    <header className="h-24">
      <GiHamburgerMenu style={{ position: "fixed", top: 10, right: 10, margin: 10 }} size={50} />
    </header>
  );
}

export default BurgerNavbar;
