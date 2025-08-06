import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projeto from "./pages/Projeto";
import Skills from "./pages/Skills";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "projeto":
        return <Projeto />;
      case "skills":
        return <Skills />;
      case "sobre":
        return <Sobre />;
      case "contato":
        return <Contato />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar setPage={setPage} />
      <main className="flex-grow flex items-center justify-center">{renderPage()}</main>
      {page !== "home" && <Footer /> && page !== "contato" && <Footer />}    

    </div>
  );
}

export default App;
