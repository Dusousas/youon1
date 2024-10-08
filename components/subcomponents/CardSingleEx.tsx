export default function CardSingleAss() {
  return (
    <>
      <div className="bg-white border-2 border-BluePrimary py-6 px-8 max-w-[400px] rounded-xl">
        <div className="border-b ">
          <div className="flex items-center justify-center mb-8">
            <img className="w-[60px]" src="medida.png" alt="" />
          </div>
          <h1 className="uppercase font-bold text-center ">Site Sob Medida</h1>
          <p className="text-GrayT my-4">Site perfeito para sua marca, com suporte opcional para manter tudo atualizado. Pagou e o site é totalmente seu.</p>
        </div>

        <div className="border-b py-4 ">
          <h1 className="uppercase text-center text-GreenT text-[12px]"><span className="text-3xl font-bold">Sob Orçamento</span></h1>

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
            <h1 className="pl-2">Pagamento Único</h1>
          </article>

          <article className="flex pt-6 items-center">
            <div>
              <img src="veri.png" alt="" />
            </div>
            <h1 className="pl-2">Otimização SEO para Google</h1>
          </article>

          <article className="flex pt-6 items-center">
            <div>
              <img src="veri.png" alt="" />
            </div>
            <h1 className="pl-2">Manutenção (Opcional)</h1>
          </article>

          <article className="flex pt-6 items-center">
            <div>
              <img src="veri.png" alt="" />
            </div>
            <h1 className="pl-2">Propriedade completa</h1>
          </article>

          <div className="text-center  mt-8">
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5511961769308&text=Olá%2C%20tenho%20interesse%20no%20plano%20*Site%20Sob%20Medida*.%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20como%20funciona%20e%20quais%20são%20os%20benefícios.%20Poderia%20me%20fornecer%20mais%20informações%3F
" className='text-white bg-BluePrimary py-2 px-6 rounded-xl uppercase gradient1 font-medium'>Faça um orçamento</a>
          </div>

        </div>

      </div>
    </>
  );
}