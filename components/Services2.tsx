import { motion } from 'framer-motion';


export default function Services2() {
    return (
        <>
            <section id='services' className='customH bg-GrayP py-20'>
                <div className='maxWidth'>

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
                                        0,  // Ponto inicial
                                        -10, // Movimento para a esquerda
                                        10,  // Movimento para a direita
                                        -10, // Movimento para a esquerda
                                        0    // Volta para o ponto inicial
                                    ],
                                    y: [
                                        0,    // Ponto inicial
                                        -10,  // Movimento para cima
                                        10,   // Movimento para baixo
                                        -10,  // Movimento para cima
                                        0     // Volta para o ponto inicial
                                    ]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut"
                                }}
                                style={{ bottom: '20px' }}
                            />
                        </div>

                        {/* Right */}
                        <div className="w-full lg:w-1/2 mt-8">
                            <p className="text-BluePrimary uppercase font-medium">Entenda um pouco mais</p>
                            <h1 className="text-white font-bold uppercase text-2xl">Funcionalidades dos sites</h1>

                            {/* CONTAINER DA LISTA Scroll */}
                            <article className="mt-12">
                                <div className="scroll-container  border-l border-[#28282e] px-2">
                                    <div className="flex gap-6 border-b border-[#28282e] mt-8">
                                        <div className="">
                                            <img className="w-[42px]" src="responsivo.png" alt="" />
                                        </div>
                                        <div className="max-w-[500px] mb-8">
                                            <h1 className="text-white text-xl font-semibold">Sites responsivos</h1>
                                            <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis nemo corrupti sed quo consequatur, quod possimus repellendus obcaecati consectetur!</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 border-b border-[#28282e] mt-8">
                                        <div className="">
                                            <img className="w-[42px]" src="responsivo.png" alt="" />
                                        </div>
                                        <div className="max-w-[500px] mb-8">
                                            <h1 className="text-white text-xl font-semibold">Sites responsivos</h1>
                                            <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis nemo corrupti sed quo consequatur, quod possimus repellendus obcaecati consectetur!</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 border-b border-[#28282e] mt-8">
                                        <div className="">
                                            <img className="w-[42px]" src="responsivo.png" alt="" />
                                        </div>
                                        <div className="max-w-[500px] mb-8">
                                            <h1 className="text-white text-xl font-semibold">Sites responsivos</h1>
                                            <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis nemo corrupti sed quo consequatur, quod possimus repellendus obcaecati consectetur!</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 border-b border-[#28282e] mt-8">
                                        <div className="">
                                            <img className="w-[42px]" src="responsivo.png" alt="" />
                                        </div>
                                        <div className="max-w-[500px] mb-8">
                                            <h1 className="text-white text-xl font-semibold">Sites responsivos</h1>
                                            <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis nemo corrupti sed quo consequatur, quod possimus repellendus obcaecati consectetur!</p>
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
