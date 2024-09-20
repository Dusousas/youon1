export default function Services() {
    return (
        <>
            <section id="services" className='customH bg-GrayP py-10'>
                <div className='maxWidth'>
                    <h1 className="text-[55px] font-bold uppercase text-center outlined-text font-Poppins lg:text-[100px]">
                        Serviços
                    </h1>
                    <h2 className="text-white relative top-[-28px]  text-3xl uppercase font-black text-center  lg:top-[-46px] lg:text-5xl"> {/* Ajuste de margem superior */}
                        O que podemos fazer por você
                    </h2>

                    <article className="flex flex-col items-center justify-center gap-x-12 lg:flex-row">
                        {/* Card */}
                        <div className="border cardLinear shadow border-BluePrimary rounded-xl mt-10 py-8 px-8 flex items-center flex-col max-w-[400px]">
                            {/* Ícone */}
                            <div className="flex  w-full mb-4">
                                <img className="w-[80px] h-[80px] text-BluePrimary transition-all duration-300" src="mentoria.png" alt="Ícone de Landing Pages" />
                            </div>
                            {/* Texto */}
                            <div className="">
                                <h1 className="text-white text-2xl font-bold mt-4 uppercase">Landing Pages</h1>
                                <p className="text-white mt-2">
                                    Focadas em alta conversão, criadas para guiar o visitante a uma ação específica, como compras ou cadastros.
                                </p>
                            </div>
                        </div>

                        <div className="border cardLinear shadow border-BluePrimary rounded-xl mt-10 py-8 px-8 flex items-center flex-col max-w-[400px]">
                            {/* Ícone */}
                            <div className="flex  w-full mb-4">
                                <img className="w-[80px] h-[80px] text-BluePrimary transition-all duration-300" src="mentoria.png" alt="Ícone de Landing Pages" />
                            </div>
                            {/* Texto */}
                            <div className="">
                                <h1 className="text-white text-2xl font-bold mt-4 uppercase">Sites Institucionais</h1>
                                <p className="text-white mt-2">
                                    Focadas em alta conversão, criadas para guiar o visitante a uma ação específica, como compras ou cadastros.
                                </p>
                            </div>
                        </div>

                        <div className="border cardLinear shadow border-BluePrimary rounded-xl mt-10 py-8 px-8 flex items-center flex-col max-w-[400px]">
                            {/* Ícone */}
                            <div className="flex  w-full mb-4">
                                <img className="w-[80px] h-[80px] text-BluePrimary transition-all duration-300" src="mentoria.png" alt="Ícone de Landing Pages" />
                            </div>
                            {/* Texto */}
                            <div className="">
                                <h1 className="text-white text-2xl font-bold mt-4 uppercase">Lojas virtuais</h1>
                                <p className="text-white mt-2">
                                    Focadas em alta conversão, criadas para guiar o visitante a uma ação específica, como compras ou cadastros.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
