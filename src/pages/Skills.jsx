export default function Skills() {
  const skills = [
    { name: "C", icon: "/skills/c.png" },
    { name: "PHP", icon: "skills/php.svg" },
    { name: "Laravel", icon: "skills/laravel.png" },
    { name: "Python", icon: "skills/python.png" },
    { name: "SQL", icon: "skills/sql.png" },
    { name: "JavaScript", icon: "skills/javascript.png" },
    { name: "React.js", icon: "skills/react.png" },
    { name: "HTML5", icon: "skills/html5.png" },
    { name: "CSS3 / Tailwind", icon: "skills/tailwind.png" },
    { name: "Git & GitHub", icon: "skills/git.png" },
    { name: "Power BI", icon: "skills/powerbi.png" },
  ];

  return (
    <section className="p-6 sm:p-10 text-center bg-gray-900">
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Minhas Skills</h2>

      <div className="max-w-5xl mx-auto px-4 sm:px-0">
        <p className="text-base sm:text-xl text-gray-300 mb-10 leading-relaxed">
          Ao longo da minha jornada, desenvolvi habilidades técnicas que me permitem criar soluções completas e eficientes, 
          desde o back-end até interfaces modernas e análises de dados. Utilizando tecnologias como:
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition transform duration-300"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="mx-auto mb-4 w-10 h-10 sm:w-16 sm:h-16 object-contain"
            />
            <h3 className="text-sm sm:text-xl font-semibold text-white">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
