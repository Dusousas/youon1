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
            <h1 className="pl-2">Criação de site profissional com modelo de layout</h1>
          </article>

          <article className="flex pt-6 items-center">
            <div>
              <img src="veri.png" alt="" />
            </div>
            <h1 className="pl-2">Criação de site profissional com modelo de layout</h1>
          </article>

          <article className="flex pt-6 items-center">
            <div>
              <img src="veri.png" alt="" />
            </div>
            <h1 className="pl-2">Criação de site profissional com modelo de layout</h1>
          </article>

          <article className="flex pt-6 items-center">
            <div>
              <img src="veri.png" alt="" />
            </div>
            <h1 className="pl-2">Criação de site profissional com modelo de layout</h1>
          </article>

          <article className="flex pt-6 items-center">
            <div>
              <img src="veri.png" alt="" />
            </div>
            <h1 className="pl-2">Criação de site profissional com modelo de layout</h1>
          </article>

          <div className="text-center">
            <button className='text-white bg-BluePrimary py-2 px-6 rounded-xl uppercase mt-8 gradient1 font-medium'>Faça um orçamento</button>
          </div>

        </div>

      </div>
    </>
  );
}