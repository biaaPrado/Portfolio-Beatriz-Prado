export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-evenly space-x-0 md:space-x-20 w-full bg-gray-900 text-white">
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-5xl font-bold">Beatriz Prado Soche</h1>
        <h2 className="text-3xl mt-2">
          I'm a <span className="text-purple-400 font-semibold">Web Developer</span>
        </h2>
        <p className="text-1xl mt-4 text-gray-300">
          Apaixonada por tecnologia e desenvolvimento. Sempre em busca de novos desafios e oportunidades. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repudiandae asperiores adipisci quam unde sequi molestias beatae hic reprehenderit, temporibus omnis.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center mt-4">
            <a
                href="https://www.canva.com/design/DAGjnpaCnHI/vRCPrV3PZlGjEp3fRgsm9w/view?utm_content=DAGjnpaCnHI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=he3b3a085e2"
                download
                target="_blank"
                className="bg-purple-500 text-black px-6 py-3 rounded-full font-medium hover:bg-purple-600 transition"
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

      <div className="mt-10 md:mt-0 pr-20 flex justify-center">
        <div className="relative w-120 h-120 rounded-full border-4 border-purple-500 overflow-hidden">
          <img
            src="/bia-sem-fundo.png"
            alt="Foto"
            className="object-cover bg-transparent w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
