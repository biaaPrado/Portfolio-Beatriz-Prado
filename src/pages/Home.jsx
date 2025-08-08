export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-evenly gap-10 px-6 py-12 w-full bg-gray-900 text-white">
      
      {/* Foto vai para o topo em telas pequenas */}
      <div className="flex justify-center md:order-2">
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border-4 border-purple-500 overflow-hidden">
          <img
            src="/bia-sem-fundo.png"
            alt="Foto"
            className="object-cover bg-transparent w-full h-full"
          />
        </div>
      </div>

      {/* Texto abaixo da imagem no mobile, e à esquerda no desktop */}
      <div className="max-w-2xl text-center md:text-left md:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Beatriz Prado Soche</h1>
        <h2 className="text-2xl sm:text-3xl mt-2">
          I'm a <span className="text-purple-400 font-semibold">Web Developer</span>
        </h2>
        <p className="text-base sm:text-lg mt-4 text-gray-300">
          Apaixonada por tecnologia e desenvolvimento. Sempre em busca de novos desafios e oportunidades. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae asperiores adipisci quam unde sequi molestias beatae hic reprehenderit, temporibus omnis.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center mt-6">
          <a
            href="https://www.canva.com/design/DAGjnpaCnHI/vRCPrV3PZlGjEp3fRgsm9w/view?utm_content=DAGjnpaCnHI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he3b3a085e2"
            download
            target="_blank"
            className="bg-purple-500 text-black px-6 py-3 rounded-3xl font-medium hover:bg-purple-600 transition hover:shadow-lg shadow-purple-600/50"
          >
            <i className="fa-solid fa-download mr-2"></i>
            Download CV
          </a>

          <div className="flex gap-4">
            <a
              href="https://github.com/biaaPrado"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black transition"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://linkedin.com/in/beatriz-prado-soche-0b8680238/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
