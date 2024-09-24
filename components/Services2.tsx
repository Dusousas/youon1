import { motion } from "framer-motion";

export default function Services2() {
  return (
    <>
      <section id="services" className="customH bg-GrayP py-20">
        <div className="maxWidth">
          <article className="flex flex-col items-center justify-center lg:flex-row lg:items-start">
            <div className="lg:w-1/2 relative">
              <img className="w-[500px] " src="servicemoon3d.png" alt="" />
              <motion.img
                className="w-[400px] absolute"
                src="serviceastro3d.png"
                alt=""
                initial={{ x: 0, y: 0 }}
                animate={{
                  x: [
                    0, // Ponto inicial
                    -10, // Movimento para a esquerda
                    10, // Movimento para a direita
                    -10, // Movimento para a esquerda
                    0, // Volta para o ponto inicial
                  ],
                  y: [
                    0, // Ponto inicial
                    -10, // Movimento para cima
                    10, // Movimento para baixo
                    -10, // Movimento para cima
                    0, // Volta para o ponto inicial
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                style={{ bottom: "20px" }}
              />
            </div>

            {/* Right */}
            <div className="w-full lg:w-1/2 mt-8">
              <p className="text-BluePrimary uppercase font-medium">
                Entenda um pouco mais
              </p>
              <h1 className="text-white font-bold uppercase text-2xl">
                Funcionalidades dos sites
              </h1>

              {/* CONTAINER DA LISTA Scroll */}
              <article className="mt-12">
                <div className="scroll-container  border-l border-[#28282e] px-2">
                  <div className="flex gap-6 border-b border-[#28282e] mt-8">
                    <div className="">
                      <img className="w-[42px]" src="responsivo.png" alt="" />
                    </div>
                    <div className="max-w-[500px] mb-8">
                      <h1 className="text-white text-xl font-semibold">
                        Sites responsivos
                      </h1>
                      <p className="text-white mt-4">
                        Sites responsivos adaptam seu layout automaticamente
                        para diferentes tamanhos de tela, como smartphones,
                        tablets e desktops. Isso garante uma experiência de
                        navegação fluida e acessível em qualquer dispositivo.
                        São importantes para melhorar a usabilidade, aumentar a
                        visibilidade nos motores de busca e atender ao crescente
                        número de usuários móveis.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 border-b border-[#28282e] mt-8">
                    <div className="">
                      <img className="w-[42px]" src="seo.png" alt="" />
                    </div>
                    <div className="max-w-[500px] mb-8">
                      <h1 className="text-white text-xl font-semibold">Seo</h1>
                      <p className="text-white mt-4">
                        A importância do SEO está em aumentar a visibilidade
                        orgânica do site, atraindo mais visitantes de forma
                        gratuita. Um bom SEO melhora a experiência do usuário,
                        torna o site mais relevante e competitivo, e ajuda a
                        conquistar tráfego qualificado, essencial para o
                        crescimento online de qualquer negócio.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 border-b border-[#28282e] mt-8">
                    <div className="">
                      <img className="w-[42px]" src="layouts.png" alt="" />
                    </div>
                    <div className="max-w-[500px] mb-8">
                      <h1 className="text-white text-xl font-semibold">
                        Layouts Únicos
                      </h1>
                      <p className="text-white mt-4">
                        Layouts únicos são designs personalizados e exclusivos
                        criados para destacar a identidade visual de um site ou
                        marca. Esses layouts são desenvolvidos de forma a
                        refletir a essência e os valores da empresa,
                        diferenciando-a da concorrência. A importância de um
                        layout único está em criar uma experiência memorável
                        para os visitantes, aumentar o engajamento e fortalecer
                        o reconhecimento da marca. Além disso, ele transmite
                        profissionalismo e credibilidade, ajudando a conquistar
                        a confiança dos usuários e a destacar a empresa no
                        mercado.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 border-b border-[#28282e] mt-8">
                    <div className="">
                      <img className="w-[42px]" src="web.png" alt="" />
                    </div>
                    <div className="max-w-[500px] mb-8">
                      <h1 className="text-white text-xl font-semibold">
                        Web Analytics
                      </h1>
                      <p className="text-white mt-4">
                        Web analytics é o processo de coleta, medição, análise e
                        interpretação de dados relacionados ao comportamento dos
                        visitantes em um site. Este campo é essencial para
                        entender como os usuários interagem com um site,
                        identificar áreas de melhoria e tomar decisões baseadas
                        em dados para otimizar a experiência do usuário e
                        atingir objetivos de negócios.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 border-b border-[#28282e] mt-8">
                    <div className="">
                      <img className="w-[42px]" src="suporte.png" alt="" />
                    </div>
                    <div className="max-w-[500px] mb-8">
                      <h1 className="text-white text-xl font-semibold">
                        Suporte contínuo
                      </h1>
                      <p className="text-white mt-4">
                        Oferecemos o Plano de Cuidados com o Site,
                        proporcionando suporte contínuo e atualizações semanais
                        para garantir a segurança e o bom funcionamento do seu
                        site. Além disso, você pode solicitar alterações mensais
                        e nossa equipe de desenvolvimento web cuidará de tudo.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
