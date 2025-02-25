import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileDrawer from "../MobileDrawer/MobileDrawer";
function BurgerNavbar() {
  const [open, setOpen] = useState(false);
  const collapseDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="block sm:hidden h-24">
        <GiHamburgerMenu style={{ position: "absolute", top: 10, right: 10, margin: 10 }} size={50} onClick={collapseDrawer} />
      </header>
      <MobileDrawer open={open} setOpen={setOpen} collapseDrawer={collapseDrawer} />
    </>
  );
}

export default BurgerNavbar;
