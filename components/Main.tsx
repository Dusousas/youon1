import React from 'react';
import { motion } from 'framer-motion'; // Importação do Framer Motion

export default function Main() {
  return (
    <div>
      <section id='main' className='customH py-10 bg'>
        <div className='maxWidth flex flex-col h-full items-center gap-x-8 gap-y-10 md:gap-y-24 gap lg:flex-row'>

          <article className='w-full lg:w-1/2'>
            <h1 className='text-4xl text-center font-bold uppercase text-white lg:text-left lg:text-6xl'>Site profissional para impulsionar o sucesso de sua empresa.</h1>
            <p className='mt-4 text-center font-normal text-white lg:text-left'>Convertendo visitantes em clientes! Sites que fazem toda a diferença.</p>
            <div className='text-center lg:text-left'>
              <button className='text-white bg-BluePrimary py-2 px-6 rounded-xl uppercase mt-8 gradient1 font-medium'>Faça um orçamento</button>
            </div>
          </article>

          {/* Astronauta com animação de flutuação */}
          <article className='w-full lg:w-1/2 lg:flex lg:justify-end'>
            <motion.img
              className='w-[220px] md:w-[300px] mx-auto lg:w-[600px] lg:mx-0'
              src="main3D.png"
              alt="Astronauta Desenvolvedor"
              animate={{ y: [0, -20, 0] }} // Animação flutuante
              transition={{
                duration: 3, // Duração da animação (3 segundos)
                repeat: Infinity, // Repetição infinita
                ease: "easeInOut" // Suavização da animação
              }}
            />
          </article>

        </div>
      </section>
    </div>
  );
}
