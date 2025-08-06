export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 text-center">
      <p className="mb-2">
        Desenvolvido por{" "}
        <span className="text-purple-400 font-semibold">
          Beatriz Prado Soche
        </span>{" "}
        • © 2025
      </p>
      <p className="mb-4">
        Projeto desenvolvido utilizando{" "}
        <span className="text-purple-400 font-semibold">React</span> com{" "}
        <span className="text-purple-400 font-semibold">Vite</span> e{" "}
        <span className="text-purple-400 font-semibold">Tailwind CSS</span>.
      </p>
      
      <div className="flex justify-center gap-6 text-purple-400 text-lg">
        <a
          href="https://github.com/biaaPrado"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="mailto:beatrizpradosoche@gmail.com"
          className="hover:text-purple-500 transition"
        >
          <i className="fas fa-envelope"></i> Email
        </a>
        <a
          href="https://linkedin.com/in/beatriz-prado-soche-0b8680238/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          href="https://instagram.com/spradobeatriz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500 transition"
        >
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>
    </footer>
  );
}
