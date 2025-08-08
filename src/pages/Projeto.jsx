function Projects() {
  const projects = [
    {
      title: "Portfólio Pessoal",
      description:
        "Portfólio principal de projetos desenvolvidos por mim. Site responsivo que apresenta meus projetos, experiências e habilidades. Desenvolvido com foco em usabilidade, design limpo e navegação intuitiva, utilizando React e Tailwind.",
      tech: [
        { name: "React", icon: "skills/react.png" },
        { name: "Tailwind CSS", icon: "skills/tailwind.png" },
        { name: "Vite", icon:"vite.svg"}
      ],
      link: "https://github.com/biaaPrado/Portfolio-Beatriz-Prado.git",
      image: "/projects/portfolio.png"
    },
    {
      title: "Gym-Hunt",
      description:
        "Plataforma web com objetivo de localizar academias próximas e demais informações. Além disso, conta com a simulação de uma rede social para usuários interessados no mundo fitness.",
      tech: [
        { name: "Laravel", icon: "skills/laravel.png" },
        { name: "Tailwind CSS", icon: "skills/tailwind.png" },
        { name: "PostgreSQL", icon: "skills/postegresql.png" }
      ],
      link: "https://github.com/biaaPrado/GymHunt-Web",
      image: "/projects/gym-hunt.png"
    },
    {
      title: "KeyFriends",
      description:
        "E-commerce de chaveiros de impressora 3D. Permite a visualização dos produtos, adição ao carrinho e simulação de compra. Site responsivo, desenvolvido com PHP e Tailwind.",
      tech: [
        { name: "PHP", icon: "skills/php.svg" },
        { name: "HTML5", icon: "skills/html5.png" },
        { name: "Tailwind CSS", icon: "skills/tailwind.png" },
        { name: "PostgreSQL", icon: "skills/postegresql.png" },
        { name: "JavaScript", icon: "skills/javascript.png" },
      ],
      link: "https://github.com/saaclevi/E-COMMERCE-CTI-72B",
      image: "/projects/KeyFriends.png"
    },
  
  ];

  return (
    <section
      id="projects"
      className="py-6 sm:py-10 text-center bg-gray-900 max-w-8xl mx-auto lg:mx-10"
    >
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Meus Projetos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-10 place-items-center">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-800 flex flex-col justify-between p-6 rounded-2xl shadow h-full"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-42 object-contain rounded-2xl shadow-sm shadow-gray-500/50"
            />

            <div className="flex-1 flex flex-col">
              <div className="flex-1 pt-2 m-2">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-200 text-justify text-sm md:text-base">{proj.description}</p>
              </div>

              {/* Tecnologias */}
              <div className="flex justify-center flex-wrap gap-3 md:gap-4 p-2 mt-auto">
                {proj.tech.map((techItem, i) => (
                  <div
                    key={i}
                    className="flex flex-row items-center border rounded-2xl px-2 border-gray-500 hover:shadow-md shadow-gray-500/50"
                  >
                    <img
                      src={techItem.icon}
                      alt={techItem.name}
                      className="w-8 h-8 object-contain rounded-lg"
                    />
                    <span className="text-xs text-gray-100 m-2">{techItem.name}</span>
                  </div>
                ))}
              </div>

              {/* Link GitHub */}
              <div className="mt-4">
                <a
                  href={proj.link}
                  className="text-purple-600 font-semibold hover:p-2 hover:rounded-3xl hover:text-black transition hover:shadow-lg shadow-purple-500/50 hover:bg-purple-500 text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Ver no GitHub
                </a>
              </div>
            </div>            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
