export default function CardSingleAss() {
  return (
    <>
      <div className="bg-GrayP py-6 px-8 max-w-[400px] rounded-xl">
        <div className="">
          <h1 className="uppercase font-bold text-3xl text-white text-center ">
            Contrate um site profissional
          </h1>

          <div className="hidden lg:mt-20 lg:block">
            <img src="plan3d.png" alt="" />
          </div>
          <p className="text-center text-BluePrimary mt-8">
            Em caso de dúvida entre em contato com um de nossos especialistas
          </p>
        </div>

        <div className="text-center mt-8">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5511961769308&text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20que%20vocês%20oferecem.%20Poderia%20me%20fornecer%20mais%20informações%20sobre%20como%20vocês%20trabalham%20e%20quais%20são%20as%20opções%20disponíveis%3F
"
            className="text-white bg-BluePrimary py-2 px-6 rounded-xl uppercase gradient1 font-medium"
          >
            Faça um orçamento
          </a>
        </div>
      </div>
    </>
  );
}
