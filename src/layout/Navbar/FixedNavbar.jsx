import { Container } from "../../components/Container/Container";
import BurgerNavbar from "./BurgerNavbar";
import Navbar from "./Navbar";

function FixedNavbar() {
  return (
    <header className="w-full fixed bg-dark z-10 opacity-90 box-border">
      <Container>
        <BurgerNavbar />
        <Navbar />
      </Container>
    </header>
  );
}

export default FixedNavbar;
