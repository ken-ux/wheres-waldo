import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 justify-center bg-red-200 px-4 py-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
