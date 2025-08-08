import { useState } from "react";

export default function Navbar({ setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick(page) {
    setPage(page);
    setMenuOpen(false);
  }

  return (
    <nav className="bg-gray-800 shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <button
          onClick={() => handleClick("home")}
          className="text-xl sm:text-2xl font-bold text-purple-400"
        >
          Beatriz Prado.
        </button>

        {/* Menu desktop */}
        <div className="hidden sm:flex gap-6 text-lg">
          <button onClick={() => handleClick("sobre")} className="hover:text-purple-400">
            Sobre Mim
          </button>
          <button onClick={() => handleClick("skills")} className="hover:text-purple-400">
            Skills
          </button>
          <button onClick={() => handleClick("projeto")} className="hover:text-purple-400">
            Projetos
          </button>
          {/* <button onClick={() => handleClick("contato")} className="hover:text-purple-400">Contato</button> */}
        </div>

        {/* Botão hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-purple-400 focus:outline-none"
          aria-label="Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          className="sm:hidden max-w-sm mx-auto
                     transition-colors duration-300
                     flex flex-col gap-4 text-center text-md"
        >

          <hr className="w-full border-t border-gray-700 my-2" />
          <button
            onClick={() => handleClick("sobre")}
            className="hover:text-purple-400 flex items-center gap-2 bg-gray-700 p-1 rounded-3xl"
          > 
          <i class="fa-regular fa-id-card"></i>
            Sobre Mim
          </button>
          <button
            onClick={() => handleClick("skills")}
            className="hover:text-purple-400 flex items-center gap-2 bg-gray-700 p-1 rounded-3xl"
          >
            <i class="fa-solid fa-hammer"></i>
            Skills
          </button>
          <button
            onClick={() => handleClick("projeto")}
            className="hover:text-purple-400 flex items-center gap-2 bg-gray-700 p-1 rounded-3xl"
          >
            <i class="fa-solid fa-laptop-code"></i>
            Projetos
          </button>
          {/* <button onClick={() => handleClick("contato")} className="hover:text-purple-400">Contato</button> */}
        </div>
      )}
    </nav>
  );
}
