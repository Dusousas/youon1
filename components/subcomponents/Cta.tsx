export default function Cta() {
  return (
    <>
      <section id="portfolio" className="customH py-10">
        <div className="maxWidth flex items-center justify-center">
          {/* Card */}
          <div className="border  border-BluePrimary bgCard  py-8 px-8 flex items-center flex-col rounded-3xl">
            <h1 className="text-[42px] text-white font-bold text-center outlined-text1 font-Poppins ">
              Não perca mais tempo
            </h1>
            <h1 className="text-[42px] text-white font-bold text-center font-Poppins ">
              aumente sua presença online
            </h1>
            <p className="font-Poppins font-thin text-white text-xl">
              {" "}
              e gere mais negócios com um site profissional.
            </p>
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
        </div>
      </section>
    </>
  );
}
