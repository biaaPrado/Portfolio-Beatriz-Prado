export default function Skills() {
  const skills = [
    { name: "C", icon: "/skills/c.png" },
    { name: "PHP", icon: "skills/php.svg" },
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
    <section className="p-10 text-center">
      <h2 className="text-3xl font-bold text-purple-400 m-4">Minhas Skills</h2>
      <div className="w-6xl">
        <p className="text-xl m-6 text-gray-300">
          Ao longo da minha jornada, desenvolvi habilidades técnicas que me permitem criar soluções completas e eficientes, 
          desde o back-end até interfaces modernas e análises de dados. Utilizando tecnologias como:
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto m-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition transform"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="mx-auto mb-4 w-16 h-16 object-contain"
            />
            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
