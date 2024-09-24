import Aks3D from "./subcomponents/Aks3D";

export default function Ask() {
    return (
        <>
            <section id="contact" className="customH py-10 bg-GrayP">
                <div className="maxWidth relative">

                    <div className="lg:absolute lg:left-[0px] lg:top-[180px]">
                        <Aks3D />
                    </div>

                    <div className="flex flex-col  w-full gap-4 items-center lg:flex-row lg:justify-center lg:w-full z-20">
                        <article className="mt-10 w-full lg:w-1/2 lg:flex lg:flex-col lg:item">
                            <h1 className="text-[55px] font-bold uppercase text-center outlined-text font-Poppins lg:text-[100px]">
                                Dúvidas
                            </h1>
                            <h2 className="text-white mx-auto relative top-[-28px] text-3xl uppercase font-black text-center lg:top-[-46px] lg:text-5xl max-w-[700px]">
                                Frequentes
                            </h2>
                            {/* ASKS */}
                            <details className="mt-4">
                                <summary className="text-white border border-BluePrimary rounded-t-xl cursor-pointer p-4 font-semibold">Qual o prazo de entrega?</summary>
                                <p className="text-white font-Poppins border-x border-b border-BluePrimary cardLinear p-4">
                                    O tempo estimado para a conclusão do seu site pode variar de acordo com nossa programação e as exigências do projeto. No orçamento, será indicada uma data provável de entrega. No entanto, esse prazo pode se estender ou ser reduzido conforme o volume de informações e a complexidade das funcionalidades solicitadas.

                                    <span className="block mt-4">
                                        Para projetos menores, como landing pages, o prazo costuma ser de até 5 dias. Sites institucionais geralmente levam até 10 dias, enquanto lojas virtuais podem levar até 60 dias, dependendo do tamanho e da complexidade do projeto.
                                    </span>
                                </p>
                            </details>

                            <details className="mt-4">
                                <summary className="text-white border border-BluePrimary rounded-t-xl cursor-pointer p-4 font-semibold">Quais as formas de pagamento?</summary>
                                <p className="text-white font-Poppins border-x border-b border-BluePrimary cardLinear p-4">Aceitamos PIX, boleto e cartão de crédito.</p>
                            </details>

                            <details className="mt-4">
                                <summary className="text-white border border-BluePrimary rounded-t-xl cursor-pointer p-4 font-semibold">Quero atrair mais clientes, um site vai fazer isso?</summary>
                                <p className="text-white font-Poppins border-x border-b border-BluePrimary cardLinear p-4">Sim! O site é uma peça fundamental para o sucesso de sua empresa no digital, dessa forma um site profissional com designer atraente pode te ajudar a conquistar mais clientes.</p>
                            </details>

                            <details className="mt-4">
                                <summary className="text-white border border-BluePrimary rounded-t-xl cursor-pointer p-4 font-semibold">Meu site aparecerá no Google?</summary>
                                <p className="text-white font-Poppins border-x border-b border-BluePrimary cardLinear p-4">Sim, está incluso em nosso trabalho de desenvolvimento de sites cadastrar seu site no Google e otimizar ele de acordo com as boas práticas de SEO.</p>
                            </details>

                            <details className="mt-4">
                                <summary className="text-white border border-BluePrimary rounded-t-xl cursor-pointer p-4 font-semibold">Existem custos mensais obrigatórios após a conclusão do meu site?</summary>
                                <p className="text-white font-Poppins border-x border-b border-BluePrimary cardLinear p-4">Após a conclusão do seu site, os custos mensais dependem do plano escolhido:
                                <span className="block mt-4">Plano de Assinatura: Você paga apenas a mensalidade combinada, sem custos adicionais.</span>
                                <span className="block mt-4">Plano Sob Medida: Pode haver custos trimestrais com a manutenção, que inclui hospedagem e domínio. Se optar por não pagar a manutenção, você será responsável por esses custos, geralmente pagos anualmente.</span>
                                </p>
                            </details>
                        </article>
                    </div>

                </div>
            </section>
        </>
    );
}