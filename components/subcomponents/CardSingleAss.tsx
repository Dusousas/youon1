export default function CardSingleAss() {
  return (
    <>
      <div className="bg-white border-2 border-BluePrimary py-6 px-8 max-w-[400px] rounded-xl">
        <div className="border-b ">
          <div className="flex items-center justify-center mb-8">
            <img className="w-[60px]" src="assinatura.png" alt="" />
          </div>
          <h1 className="uppercase font-bold text-center ">Site por assinatura</h1>
          <p className="text-GrayT my-4">Para quem deseja uma solução completa com benefícios extras e suporte contínuo, com um custo mensal acessível.</p>
        </div>

        <div className="border-b py-4 ">
          <h1 className="uppercase text-center text-GreenT text-[12px]">a partir de <span className="text-3xl font-bold">R$200</span> <span className="text-GrayT">Mensais</span></h1>
        </div>

        <div className=" ">
          <article className="flex pt-8 items-center">
            <div>
              <img src="veri.png" alt="" />
            </div>
            <h1 className="pl-2">Criação de site profissional</h1>
          </article>

          <article className="flex pt-6 items-center">
            <div>
              <img src="veri.png" alt="" />
            </div>
            <h1 className="pl-2">Site responsivo (desktop, tablet, celular)</h1>
          </article>

          <article className="flex pt-6 items-center">
            <div>
              <img src="veri.png" alt="" />
            </div>
            <h1 className="pl-2">Manutenção 24 horas</h1>
          </article>

          <article className="flex pt-6 items-center">
            <div>
              <img src="veri.png" alt="" />
            </div>
            <h1 className="pl-2">Hopedagem</h1>
          </article>

          <article className="flex pt-6 items-center">
            <div>
              <img src="veri.png" alt="" />
            </div>
            <h1 className="pl-2">Domínio</h1>
          </article>

          <article className="flex pt-6 items-center">
            <div>
              <img src="veri.png" alt="" />
            </div>
            <h1 className="pl-2">Otimização SEO para Google</h1>
          </article>

          <div className="text-center mt-8 ">
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5511961769308&text=Olá%2C%20tenho%20interesse%20no%20plano%20*Site%20por%20Assinatura*.%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20como%20funciona%20e%20quais%20são%20os%20benefícios.%20Poderia%20me%20fornecer%20mais%20informações%3F" className='text-white bg-BluePrimary py-2 px-6 rounded-xl uppercase gradient1 font-medium'>Faça um orçamento</a>
          </div>

        </div>

      </div>
    </>
  );
}