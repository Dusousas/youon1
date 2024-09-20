import { motion } from "framer-motion";

export default function Aks3D() {
    return (
        <>
            <div className="px-4 flex justify-center relative ">
                {/* Imagem principal */}
                <img className=" w-[180px] lg:w-[280px] " src="ask3d.png" alt="Ask 3D" />
                {/* Imagem piscando */}
                <motion.img
                    className="hidden absolute bottom-[360px] left-[180px] w-[70px] lg:block"
                    src="ask13d.png"
                    alt="Ask 13D"
                    // Animação de piscar
                    animate={{ opacity: [0, 10, 0] }}
                    transition={{
                        duration: 5, // Duração total do ciclo (piscada completa)
                        repeat: Infinity, // Repete indefinidamente
                        ease: "easeInOut" // Efeito suave para a animação
                    }}
                />
            </div>
        </>
    );
}
