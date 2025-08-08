function Projects() {
  const projects = [
    {
      title: "Portfólio Pessoal",
      description: "Portfólio principal de projetos desenvolvidos por mim. Site responsivo desenvolvido com React e Tailwind.",
      tech: "skills/react.png",
      link: "https://github.com/biaaPrado/Portfolio-Beatriz-Prado.git",
      image: "/projects/portfolio.png" 
    },
    {
      title: "Gym-Hunt",
      description: "Plataforma web com objetivo de localizar academias próximas e demais informações. Além disso, conta com a simulação de uma rede social para usuários interessados no mundo fitness.",
      tech: "skills/laravel.png",
      link: "https://github.com/biaaPrado/GymHunt-Web",
      image: "/projects/gym-hunt.png" 
    },
    {
      title: "KeyFriends",
      description: "E-commerce de chaveiros de impressora 3D. Permite a visualização dos produtos, adição ao carrinho e simulação de compra. Site responsivo, desenvolvido com PHP e Tailwind.",
      tech: "skills/php.svg",
      link: "#",
      image: "/projects/KeyFriends.png" // exemplo
    },
  ];

  return (
    <section id="projects" className="py-6 sm:p-10 text-center bg-gray-900 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Projetos</h2>
      <div className="grid md:grid-cols-3 gap-12 justify-center">
        {projects.map((proj, index) => (
          <div key={index} className="bg-gray-800 flex flex-col justify-between p-6 rounded-2xl shadow">
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-40 object-contain rounded-2xl"
            />

            <div className="text-center m-2">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-200 text-justify">{proj.description}</p>
            </div>

            <img
              src={proj.tech}
              alt={proj.name}
              className="mx-auto mt-2 w-10 h-10 sm:w-6 sm:h-6 object-contain"
            />
            
            <div className="mt-4">
              <a
              href={proj.link}
              className="text-purple-600 font-semibold hover:p-2 hover:max-w hover:rounded-3xl hover:text-black transition hover:shadow-lg shadow-purple-500/50 hover:bg-purple-500"
              target="_blank"
              rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> Ver no GitHub 
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
