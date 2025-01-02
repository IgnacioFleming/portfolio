import Navbar from "./Navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-950 h-full flex justify-center">
      <div className="w-3/4">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </div>
  );
}

export default Layout;
