export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 text-center px-4">
      <p className="mb-2 text-sm sm:text-base">
        Desenvolvido por{" "}
        <span className="text-purple-400 font-semibold">
          Beatriz Prado Soche
        </span>{" "}
        • © 2025
      </p>
      <p className="mb-6 text-sm sm:text-base max-w-xl mx-auto">
        Projeto desenvolvido utilizando{" "}
        <span className="text-purple-400 font-semibold">React</span> com{" "}
        <span className="text-purple-400 font-semibold">Vite</span> e{" "}
        <span className="text-purple-400 font-semibold">Tailwind CSS</span>.
      </p>
      
      <div className="grid grid-cols-2 sm:flex sm:flex-row sm:justify-center gap-4 max-w-full mx-auto text-purple-400 text-base sm:text-lg">
        <a
          href="https://github.com/biaaPrado"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition flex items-center justify-center gap-2"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="mailto:beatrizpradosoche@gmail.com"
          className="hover:text-purple-500 transition flex items-center justify-center gap-2"
        >
          <i className="fas fa-envelope"></i> Email
        </a>
        <a
          href="https://linkedin.com/in/beatriz-prado-soche-0b8680238/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition flex items-center justify-center gap-2"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://instagram.com/spradobeatriz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition flex items-center justify-center gap-2"
        >
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>
    </footer>
  );
}
