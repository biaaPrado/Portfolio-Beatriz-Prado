export default function Navbar({ setPage }) {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md">
      <button onClick={() => setPage("home")} className="text-2xl font-bold text-purple-400">Beatriz Prado.</button>
      <div className="flex gap-6 text-lg">
        <button onClick={() => setPage("sobre")} className="hover:text-purple-400">Sobre Mim</button>
        <button onClick={() => setPage("skills")} className="hover:text-purple-400">Skills</button>
        <button onClick={() => setPage("projeto")} className="hover:text-purple-400">Projetos</button>
        {/* <button onClick={() => setPage("contato")} className="hover:text-purple-400">Contato</button> */}
      </div>
    </nav>
  );
}
