function Projects() {
  const projects = [
    {
      title: "Portfólio Pessoal",
      description: "Site responsivo desenvolvido com React e Tailwind.",
      link: "#"
    },
    {
      title: "Gerenciador de Tarefas",
      description: "Aplicação web para organizar e acompanhar tarefas.",
      link: "#"
    },
    {
      title: "Landing Page",
      description: "Página de apresentação com design moderno e responsivo.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Projetos</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-gray-600 mb-4">{proj.description}</p>
            <a
              href={proj.link}
              className="text-blue-600 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver projeto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
