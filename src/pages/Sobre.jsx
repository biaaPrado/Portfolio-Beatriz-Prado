export default function About() {
  return (
    <section className="flex flex-col items-center justify-center text-white p-6 sm:p-10 md:px-16 lg:px-20 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl text-center font-bold text-purple-400 mb-6">Sobre Mim</h2>

      <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg max-w-8xl w-full leading-relaxed space-y-6 text-justify text-base sm:text-lg md:text-xl">
        <p>
          Sou estudante de Ciência da Computação na{' '}
          <span className="text-purple-300 font-medium">UNIFESP - Universidade Federal de São Paulo</span>, com formação Técnica em Informática pelo{' '}
          <span className="text-purple-300 font-medium">
            Colégio Técnico Industrial “Prof. Isaac Portal Roldán”
          </span>, onde desenvolvi uma base sólida em <span className="font-bold">Desenvolvimento Web</span>,{' '}
          <span className="font-bold">Lógica de Programação</span> e <span className="font-bold">Bancos de Dados</span>.
        </p>

        <p>
          Tenho experiência prática em desenvolvimento, com atuação como Bolsista{' '}
          <span className="text-purple-300 font-medium">FAPESP</span>, desenvolvendo projetos voltados à escalabilidade e integração de sistemas, além de estágio em Desenvolvimento Web na{' '}
          <span className="text-purple-300 font-medium">Firework Web & Mobile</span>, onde trabalhei com interfaces responsivas, integração de APIs e metodologias ágeis. Nessas experiências, participei de projetos que envolveram desde sistemas com dashboards interativos e ingestão de dados distribuídos até plataformas web dinâmicas, sempre com foco em usabilidade, eficiência e boas práticas de desenvolvimento.
        </p>

        <p>
          Além disso, estou focada em aprofundar meus conhecimentos em <span className="font-bold">Análise de Dados</span>, <span className="font-bold">Inteligência Artificial</span>, e no aprimoramento contínuo de habilidades em desenvolvimento web, explorando ferramentas e técnicas que me permitam criar soluções inteligentes, escaláveis e orientadas por dados.
        </p>

        <p>
          Destaco-me pelo <span className="font-bold">espírito colaborativo</span>, <span className="font-bold">comunicação clara</span> e <span className="font-bold">adaptabilidade</span>, além de ser <span className="font-bold">organizada</span> e <span className="font-bold">proativa</span> – qualidades que me permitem contribuir para ambientes produtivos e inovadores, unindo o aspecto técnico a sólidas relações interpessoais. Sou movida pelo <span className="font-bold">desejo constante de resolver problemas</span> e <span className="font-bold">aprender</span>, acreditando que a tecnologia é uma ponte entre ideias e resultados concretos.
        </p>
      </div>
    </section>
  )
}
