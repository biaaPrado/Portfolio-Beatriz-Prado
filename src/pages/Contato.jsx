function Contact() {
  return (
    <section id="contact" className="">
      <h2 className="text-3xl text-center font-bold text-purple-400 mb-10">Contato</h2>
      <p className="text-lg text-gray-700 text-center mb-10">
        Entre em contato para parcerias ou oportunidades!
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
    </section>
  );
}

export default Contact;
